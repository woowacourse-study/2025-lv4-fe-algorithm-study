function solution(k, m, score) {
  score.sort((a, b) => b - a);

  let sum = 0;
  for (let i = m - 1; i < score.length; i += m) {
    sum += score[i] * m;
  }

  return sum;
}
