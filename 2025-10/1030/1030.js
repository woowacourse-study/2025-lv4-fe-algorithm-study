/**
 * 첫 번째 풀이: 예시 답은 다 맞는데 틀렸다고 나옴
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [N, T] = input.shift().split(" ").map(Number);

// 버스 개수: 1개, 영식이가 도착하는 시간: 285분
// 첫 번째 버스: 150분에 시작, 50분 간격, 10대

// 영식이가 더 기다려야 하는 시간: waitingTime
// 영식이가 도착하는 동시에 버스가 출발한다면 0분

let ans = Infinity;

for (let i = 0; i < N; i++) {
  const [S, I, C] = input.shift().split(" ").map(Number);
  const waitingTime = findWaitingTime(T, S, I, C);

  ans = Math.min(ans, waitingTime);
}

function findWaitingTime(T, S, I, C) {
  if (T === S) return 0;
  if (T < S) return S - T;

  /**
   * 영식이가 도착한 시간 > 버스 처음 시작 시간
   */
  let busTime = S;
  for (let i = 0; i < C; i++) {
    busTime += I;
    if (T <= busTime) {
      return busTime - T;
    }
  }

  // 모든 버스를 확인했는데도 영식이보다 늦게 도착하는 버스가 없으면 -1 반환
  return -1;
}

console.log(ans);

/**
 * 두 번째 풀이: 정답(https://homile.tistory.com/429)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [_, T] = input.shift().split(" ").map(Number);
let ans = Infinity;

input.forEach((line) => {
  const [S, I, C] = line.split(" ").map(Number);

  const busDispatches = Array.from({ length: C }, (_, i) => S + I * i);
  const validDispatches = busDispatches.filter((busTime) => busTime >= T);

  if (validDispatches.length) ans = Math.min(ans, ...validDispatches);
});

console.log(ans === Infinity ? -1 : ans - T);
