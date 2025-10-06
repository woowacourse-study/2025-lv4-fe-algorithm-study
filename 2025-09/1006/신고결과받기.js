function solution(id_list, report, k) {
  var answer = []

  // 1. 데이터 구조 정의
  const caller_map = new Map() // 신고자 : 신고당한 사람들 (Set으로 중복 방지)
  const called_map = new Map() // 신고당한 사람 : 신고횟수

  // 2. 신고 데이터 처리 (중복 신고 방지)
  for (let rep of report) {
    const [caller, called] = rep.split(" ")

    if (!caller_map.has(caller)) {
      // 처음 신고하는 사람인 경우
      const call_list = new Set()
      caller_map.set(caller, call_list.add(called)) // 신고자의 신고 목록에 추가
      called_map.set(called, (called_map.get(called) ?? 0) + 1) // 신고당한 횟수 증가
    } else {
      // 이미 신고한 적이 있는 사람인 경우
      const call_list = caller_map.get(caller)

      // 같은 사람을 중복으로 신고하지 않았을 때만 처리
      if (!call_list.has(called)) {
        called_map.set(called, (called_map.get(called) ?? 0) + 1)
      }
      // 신고 목록에 추가 (Set이므로 중복 자동 제거)
      caller_map.set(caller, caller_map.get(caller).add(called))
    }
  }

  // 3. 정지된 유저 찾기 (k번 이상 신고당한 사람)
  const filteredCalledMap = Array.from(called_map).filter(
    ([name, cnt]) => cnt >= k,
  )

  // 4. 각 유저별 메일 받을 횟수 계산
  for (let id of id_list) {
    const hasCall = caller_map.get(id) // 해당 유저가 신고한 사람들의 목록

    // 신고한 적이 없거나, 정지된 유저가 없으면 0개
    if (!hasCall || !filteredCalledMap.length) {
      answer.push(0)
      continue
    }

    let myCnt = 0

    // 정지된 유저들 중에서 내가 신고한 사람의 수를 계산
    for (let [target, cnt] of filteredCalledMap) {
      if (hasCall.has(target)) {
        myCnt += 1 // 내가 신고한 사람이 정지되면 메일 1개 받음
      }
    }

    answer.push(myCnt)
  }
  return answer
}
