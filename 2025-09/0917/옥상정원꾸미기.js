const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const buildings = input.slice(1).map(Number)

const stack = []
let answer = 0

for (let i = 0; i < n; i += 1) {
  const building = buildings[i]

  // stack과 현재 빌딩 비교
  // stack의 top이 더 크면 오른쪽 볼 수 있음
  // stack의 top이 더 작으면 오른쪽 못 봄
  while (stack.length > 0) {
    const top = stack[stack.length - 1]
    if (top > building) {
      break
    } else {
      stack.pop()
    }
  }

  answer += stack.length
  stack.push(building)
}

console.log(answer)
