/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const count = {};

  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  let length = 0;
  let hasOdd = false;

  for (const freq of Object.values(count)) {
    if (freq % 2 === 0) {
      length += freq; // 짝수는 전부 사용
    } else {
      length += freq - 1; // 홀수는 짝수 부분만 사용
      hasOdd = true; // 홀수가 하나라도 있으면 중앙에 1개 추가 가능
    }
  }

  return hasOdd ? length + 1 : length;
};
