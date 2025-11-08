function solution(arr) {
  let min = Math.min(...arr);
  const answer = arr.filter((num) => num !== min);
  if (answer.length === 0) return -1;
  return answer;
}
