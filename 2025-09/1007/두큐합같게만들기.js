function solution(queue1, queue2) {
  var answer = -1
  const queue = [...queue1, ...queue2]
  const sum = queue.reduce((prev, cur) => prev + cur, 0)

  let sum1 = queue1.reduce((prev, cur) => prev + cur, 0)
  let start1 = 0 // queue1의 시작
  let end1 = queue1.length - 1 // queue1의 끝

  let cnt = 0
  // queue를 다 돌고 원래의 queue1, queue2로 돌아와도 못 만들어졌으면 만들 수가 없는 것
  while (cnt <= queue.length * 2) {
    if (sum1 < sum / 2) {
      // queue1의 합이 전체의 합의 반보다 작으면 queue1에 insert
      end1 += 1
      sum1 += queue[end1 % queue.length]
      cnt += 1
    } else if (sum1 > sum / 2) {
      // queue1의 합이 전체의 합의 반보다 크면 queue1에서 pop
      sum1 -= queue[start1 % queue.length]
      start1 += 1
      cnt += 1
    } else {
      // queue1의 합 === queue2의 합
      answer = cnt
      break
    }
  }

  return answer
}
