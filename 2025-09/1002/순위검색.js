function solution(info, queries) {
  const dataBase = new Map()

  // 1. 데이터베이스 구축 - 지원자 정보를 조건별로 분류하여 저장
  for (const str of info) {
    const [lang, type, period, food, score] = str.split(" ")
    const key = `${lang}-${type}-${period}-${food}` // 조건을 키로 만들기

    // 같은 조건의 지원자가 있으면 점수 배열에 추가, 없으면 새로 생성
    if (dataBase.get(key)) dataBase.set(key, [...dataBase.get(key), +score])
    else dataBase.set(key, [+score])
  }

  // 2. 각 조건별 점수 배열을 오름차순으로 정렬 (이진 탐색을 위함)
  for (const [key, val] of dataBase) {
    dataBase.set(
      key,
      val.sort((a, b) => a - b),
    )
  }

  // 3. 쿼리 파싱 함수 - 검색 조건을 모든 가능한 조합으로 확장
  const separateQuery = (query) => {
    let [lang, type, period, last] = query.split(" and ")
    let [food, score] = last.split(" ")

    // "-" 조건을 모든 가능한 값으로 확장
    lang = lang === "-" ? ["cpp", "java", "python"] : [lang]
    type = type === "-" ? ["backend", "frontend"] : [type]
    period = period === "-" ? ["junior", "senior"] : [period]
    food = food === "-" ? ["chicken", "pizza"] : [food]

    // 4중 반복문으로 모든 조합 생성
    let ret = []
    for (const la of lang) {
      for (const ty of type) {
        for (const pe of period) {
          for (const fo of food) {
            ret.push([`${la}-${ty}-${pe}-${fo}`, +score])
          }
        }
      }
    }
    return ret
  }

  // 4. 이진 탐색 함수 - 특정 점수 이상인 지원자 수를 빠르게 찾기 위함
  const binarySearch = (list, num) => {
    let [left, right] = [0, list.length - 1]

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (list[mid] === num) {
        // 같은 값이 여러 개 있을 경우 가장 왼쪽 인덱스를 찾음
        while (mid > 0 && list[mid - 1] === num) mid--
        return mid
      }

      if (list[mid] > num) right = mid - 1
      else left = mid + 1
    }
    // 찾는 값이 없으면 삽입될 위치(해당 점수 이상의 첫 번째 인덱스) 반환
    return left
  }

  // 5. 각 쿼리에 대해 조건을 만족하는 지원자 수 계산
  const ret = queries.map((query) => {
    const newQueryList = separateQuery(query) // 쿼리를 모든 가능한 조합으로 확장
    let sum = 0

    // 각 조합에 대해 조건을 만족하는 지원자 수를 구해서 합산
    for (const [newQuery, score] of newQueryList) {
      const numList = dataBase.get(newQuery) // 해당 조건의 지원자 점수 배열
      // 이진 탐색으로 해당 점수 이상인 지원자 수 계산
      sum += numList ? numList.length - binarySearch(numList, score) : 0
    }

    return sum
  })

  return ret
}
