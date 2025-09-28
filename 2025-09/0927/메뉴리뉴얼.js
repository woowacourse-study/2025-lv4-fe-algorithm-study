/**
 * 주문을 기반으로 가능한 모든 코스 조합을 생성하고, 각 코스의 주문 횟수를 계산합니다.
 * @param {Map<string, number>} ALL_COURSE - 생성된 코스와 주문 횟수를 저장할 Map
 * @param {number} maxCourseLength - 코스의 최대 길이
 * @param {string} orders - 손님이 주문한 단품메뉴 조합
 * @param {number} start - 메뉴 조합을 시작할 인덱스
 * @param {string[]} currentCourse - 현재까지 만들어진 코스
 */
// 코스 만들기
function makeCourse(ALL_COURSE, maxCourseLength, orders, start, currentCourse) {
  if (currentCourse.length === maxCourseLength) {
    // 현재 코스메뉴 길이가 최대 코스메뉴 길이와 같다면 코스메뉴로 추가
    const key = currentCourse.sort().join("")
    ALL_COURSE.set(key, (ALL_COURSE.get(key) ?? 0) + 1)
    return
  }
  for (let i = start; i < orders.length; i += 1) {
    // 현재 코스메뉴 길이가 최대 코스메뉴 길이보다 작다면 단품메뉴 추가
    // i+1로 다음 단품메뉴부터 추가해야 중복조합이 생기지 않음 (ex AB, BA, BB)
    makeCourse(ALL_COURSE, maxCourseLength, orders, i + 1, [
      ...currentCourse,
      orders[i],
    ])
  }
}

function solution(orders, course) {
  var answer = []
  const ALL_COURSE = new Map()
  for (let c of course) {
    for (let ord of orders) {
      if (ord.length < c) {
        // 만들어야 할 코스에 필요한 메뉴 수 보다 주문한 단품메뉴 조합의 수가 작으면 못 만듦
        continue
      }
      makeCourse(ALL_COURSE, c, ord, 0, [])
    }
  }

  // 2번 이상 주문된 코스메뉴만 필터링
  const newCourses = Array.from(ALL_COURSE)
    .filter(([val, cnt]) => cnt !== 1)
    .sort((a, b) => b[1] - a[1])

  // course를 순회하며 가장 많이 주문된 코스메뉴를 answer에 추가
  for (let c of course) {
    // 현재 코스메뉴 길이와 같은 코스메뉴만 필터링
    const filteredCourses = newCourses.filter(([val, cnt]) => val.length === c)

    // 가장 많이 주문된 코스 수 구하기
    const MAX_COUNT = Math.max(...filteredCourses.map(([val, cnt]) => cnt))

    // 가장 많이 주문된 코스가 여러개일 수 있으므로 필터링
    const myCourse = filteredCourses.filter(([val, cnt]) => cnt === MAX_COUNT)
    answer.push(...myCourse.map(([val]) => val))
  }

  // 알파벳 오름차순 정렬
  return answer.sort()
}
