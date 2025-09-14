function solution(arr) {
  const length = arr.length;
  const minLength = Math.pow(2, Math.ceil(Math.log2(length)));
  return [...arr, ...Array(minLength - length).fill(0)];
}
