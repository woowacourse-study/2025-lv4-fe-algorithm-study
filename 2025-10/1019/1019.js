function solution(arr, divisor) {
  var answer = [];
  arr.sort((a, b) => a - b);
  const tempArr = arr.filter((num) => num % divisor === 0);
  if (tempArr.length === 0) return [-1];
  return tempArr;
}
