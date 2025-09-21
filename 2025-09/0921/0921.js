function solution(arr, k) {
  let answer = [];
  let count = 0;
  arr.forEach((n, i) => {
    if (count < k && !answer.includes(n)) {
      answer.push(n);
      count++;
    }
  });
  while (count < k) {
    answer.push(-1);
    count++;
  }
  return answer;
}
