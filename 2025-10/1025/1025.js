/**
 * 내 풀이
 */
const [N, M] = input.shift().split(" ").map(Number);
const jewel = Array.from({ length: M }, (_, index) => +input[index]).sort(
  (a, b) => a - b
);

let left = 1; // 질투심 최솟값
let right = jewel[M - 1]; // 질투심 최댓값 (가장 많은 보석의 개수)

while (left <= right) {
  let mid = Math.floor((left + right) / 2); // 현재 확인할 질투심 값
  let count = 0; // 필요한 아이의 수

  // 각 보석 종류별로 필요한 아이의 수 계산
  for (let i = 0; i < M; i++) {
    // 질투심이 mid일 때, jewel[i]개의 보석을 나눠주는데 필요한 아이의 수
    count += Math.floor(jewel[i] / mid);

    // 나머지가 있으면 한 명 더 필요
    if (jewel[i] % mid) count++;
  }

  // 필요한 아이의 수가 실제 아이의 수보다 적거나 같으면
  if (count <= N) {
    right = mid - 1; // 질투심을 더 작게 설정 가능
  } else {
    left = mid + 1; // 질투심을 더 크게 설정해야 함
  }
}

// 최종 답: 질투심의 최솟값
console.log(left);

/**
 * 추가 레퍼런스 코드
 * https://www.acmicpc.net/source/95854374
 *
 * 좀 더 직관적으로 풀 수 있음
 * Math.ceil(gem[i] / max): "gem[i]개의 보석을 max개씩 나눠줄 때 필요한 학생 수"
 * 나머지 처리를 별도로 할 필요가 없음
 *
 * 오른쪽 쉬프트 연산자 (>>) 기본 개념
 * - 비트를 오른쪽으로 이동시키는 연산자
 * - a >> b는 a의 비트를 b만큼 오른쪽으로 이동
 *
 * 오른쪽 쉬프트 연산자 (>>)의 특징:
 * - a >> 1 = Math.floor(a / 2)
 * - 비트 연산이므로 더 빠름 (약 2배 빠름)
 * - 이진 탐색에서 중간값 계산에 자주 사용
 * - 정수에 대해서만 동작
 *
 * 이진 탐색에서 사용하는 이유:
 * - 성능 최적화: 비트 연산이 나눗셈보다 빠름
 * - 코드 간결성: (left + right) >> 1이 더 짧음
 * - 정확성: 정수 범위에서 Math.floor((left + right) / 2)와 동일한 결과
 *
 * 주의사항:
 * - 음수에서는 동작이 다를 수 있음 (하지만 이진 탐색에서는 left, right가 모두 양수)
 * - 정수에 대해서만 사용해야 함
 */

const [N, M] = input[0].split(" ").map(Number);
const gem = input.slice(1, M + 1).map(Number);

let left = 1;
let right = Math.max(...gem);

while (left < right) {
  const mid = (left + right) >> 1;
  if (distribute(mid)) right = mid;
  else left = mid + 1;
}

console.log(left);

function distribute(max) {
  let student = 0;
  for (let i = 0; i < M; i++) {
    student += Math.ceil(gem[i] / max);

    if (student > N) return false;
  }
  return true;
}
