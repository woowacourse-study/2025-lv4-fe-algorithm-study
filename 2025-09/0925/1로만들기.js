const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

const dp = Array.from({ length: n + 1 }, () => Infinity)
dp[n] = 0

const queue = [n]

while (queue.length > 0) {
  const x = queue.shift()

  if (x % 3 === 0) {
    const next = x / 3
    if (dp[next] > dp[x] + 1) {
      queue.push(next)
      dp[next] = Math.min(dp[next], dp[x] + 1)
    }
  }
  if (x % 2 === 0) {
    const next = x / 2
    if (dp[next] > dp[x] + 1) {
      queue.push(next)
      dp[next] = Math.min(dp[next], dp[x] + 1)
    }
  }
  if (x - 1 >= 1) {
    const next = x - 1
    if (dp[next] > dp[x] + 1) {
      queue.push(next)
      dp[next] = Math.min(dp[next], dp[x] + 1)
    }
  }
}

console.log(dp[1])
