function solution(queue1, queue2) {
  var answer = 0;
  let q1Sum = queue1.reduce((acc, curr) => acc + curr, 0);
  let q2Sum = queue2.reduce((acc, curr) => acc + curr, 0);
  let q1Point = 0;
  let q2Point = 0;
  let maxInterval = queue1.length * 3;

  const sum = q1Sum + q2Sum;

  while (q1Sum !== sum / 2 && q2Sum !== sum / 2) {
    if (answer > maxInterval) {
      answer = -1;
      break;
    }
    if (q1Sum > q2Sum) {
      const shift = queue1[q1Point];
      queue2.push(shift);
      q1Sum -= shift;
      q2Sum += shift;
      q1Point++;
    } else {
      const shift = queue2[q2Point];
      queue1.push(shift);
      q1Sum += shift;
      q2Sum -= shift;
      q2Point++;
    }
    answer++;
  }

  return answer;
}
