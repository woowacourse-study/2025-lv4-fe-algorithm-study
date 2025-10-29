/**
 * 틀린 풀이
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [N, L, W, H] = input[0].split(" ").map(Number);
let A = 0;

let left = 1;
let right = 1_000_000_000;

while (left <= right) {
  let mid = (left + right) / 2;

  const boxCount =
    Math.floor(L / mid) * Math.floor(W / mid) * Math.floor(H / mid);

  if (boxCount <= N) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(A);

/**
 * 정답 풀이 (참고: https://velog.io/@hongkyu9941/BOJ-1166%EB%B2%88-%EC%84%A0%EB%AC%BC)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [N, L, W, H] = input[0].split(" ").map(Number);

/**
 * left를 1이 아닌 0으로 설정한 이유:
 * - 실수 범위의 이분 탐색에서는 정수 이분 탐색과 달리 left == right로 수렴할 수 없음
 * - left를 0으로 설정해도 실제로는 mid 값이 계산되면서 의미 있는 범위에서 탐색됨
 * - 작은 박스 크기는 0보다 커야 하지만, left를 0으로 두면 초기 범위를 충분히 넓게 설정할 수 있어 안전함
 * - 또한 A의 최댓값이 매우 작은 값(예: 0.001)일 수 있으므로 left를 0으로 두는 것이 유연함
 * - L, W, H의 최솟값이 1이므로, A는 1보다 작아질 수 있음
 */
let left = 0;
/**
 * 작은 박스의 한 변이라도 큰 박스의 한 변보다 크면 큰 박스에 넣을 수 없음
 */
let right = Math.min(L, W, H);
let mid = 0;

/**
 * for 문으로 순회하는 이유 + 100번 돌리는 이유:
 * - 실수 범위의 이분 탐색에서는 left == right 조건으로 종료를 판단할 수 없음
 * - 매 반복마다 [left, right] 범위를 절반으로 줄이면서 mid 값을 업데이트함
 * - 100번 반복하면 범위가 2^100으로 나뉘어져 매우 높은 정밀도를 얻을 수 있음
 * - 문제에서 절대/상대 오차 10^-9까지 허용하는데, 100번 반복하면 충분히 이 정밀도를 만족함
 * - 일반적으로 실수 이분 탐색에서는 60~100번 반복으로 충분히 수렴함
 */
for (let i = 0; i < 100; i++) {
  mid = (left + right) / 2;

  const boxCount =
    Math.floor(L / mid) * Math.floor(W / mid) * Math.floor(H / mid);

  /**
   * boxCount >= N: 크기를 키워도 됨. 더 큰 답(A)이 가능하므로 left = mid로 범위를 오른쪽으로 이동
   */
  if (boxCount >= N) left = mid;
  /**
   * boxCount < N: 크기를 줄여야 하므로 right = mid로 범위를 왼쪽으로 좁힘
   */ else right = mid;
}

/**
 * 등호를 왼쪽에 둔 이유: 최댓값을 찾기 때문에 가능성을 남겨두기 위함
 * boxCount == N일 때: mid가 답의 후보임. 더 큰 값도 가능하므로 범위를 위로 확장하기 위함
 * 만약 boxCount > N일 때만 left = mid라면: boxCount == N인 경우에 right = mid가 되어 mid보다 작은 범위를 탐색하게 되고, 최댓값을 놓칠 수 있음!
 * 결론적으로, 등호(>=)를 포함해 최대한 큰 값까지 탐색을 확장해야 함
 */
console.log(left.toFixed(9));
