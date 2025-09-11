const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const buildings = input.slice(1).map(Number)
let answer = 0

const stack = []

for (let i = 0; i < n; i += 1) {
  while (stack.length > 0) {
    if (stack[stack.length - 1] <= buildings[i]) {
      stack.pop()
    } else {
      break
    }
  }

  // 위 while문이 끝나면, 스택에 남아있는 빌딩들은 모두 현재 빌딩(buildings[i])보다 높습니다.
  // 이는 스택에 남아있는 모든 빌딩들이 현재 빌딩의 옥상을 볼 수 있다는 의미입니다

  answer += stack.length
  stack.push(buildings[i])
}

console.log(answer)
