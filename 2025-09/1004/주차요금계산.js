// 분으로 시간 변환
function convert(time) {
  const [hour, min] = time.split(":").map(Number)
  return hour * 60 + min
}

function solution(fees, records) {
  var answer = []
  const [defaultTime, defaultFee, perTime, perFee] = fees

  const inAndOutRecord = new Map() // 입출차 기록 key: 차번호, value: 입차시간(분)
  const timeRecord = new Map() // 누적 주차 시간 기록 key: 차번호, value: 누적 주차 시간(분)

  for (let record of records) {
    const [time, car, status] = record.split(" ")
    if (status === "IN") {
      // 입차
      inAndOutRecord.set(car, convert(time))
    } else {
      // 출차
      const inTime = inAndOutRecord.get(car)

      // 누적 주차 시간 기록
      // 기존에 기록된 누적 주차 시간이 없으면 0으로 초기화
      timeRecord.set(car, (timeRecord.get(car) ?? 0) + convert(time) - inTime)

      inAndOutRecord.delete(car)
    }
  }

  if (inAndOutRecord.size > 0) {
    // 출차 기록이 없는 차량은 23:59에 출차된 것으로 간주
    for (let [car, inTime] of Array.from(inAndOutRecord)) {
      timeRecord.set(
        car,
        (timeRecord.get(car) ?? 0) + convert("23:59") - inTime,
      )
    }
  }

  // 요금 계산
  const feeRecord = Array.from(timeRecord).map(([car, time]) => {
    if (time <= defaultTime) {
      return [car, defaultFee]
    } else {
      return [
        car,
        defaultFee + Math.ceil((time - defaultTime) / perTime) * perFee,
      ]
    }
  })

  // 차량 번호가 작은 자동차부터 청구할 주차 요금을 차례대로 배열에 담아 return
  answer = feeRecord.sort((a, b) => a[0] - b[0]).map(([car, fee]) => fee)

  return answer
}
