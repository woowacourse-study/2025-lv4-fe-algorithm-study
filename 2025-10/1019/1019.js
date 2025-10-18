function solution(A, B) {
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => a - b);

  let score = 0;
  let j = 0; // b의 포인터

  for (let i = 0; i < A.length; i++) {
    while (j < B.length && B[j] <= A[i]) j++;

    if (j < B.length) {
      score++;
      j++;
    } else {
      break;
    }
  }

  return score;
}
