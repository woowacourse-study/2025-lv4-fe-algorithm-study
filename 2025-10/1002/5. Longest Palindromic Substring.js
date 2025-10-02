var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  let start = 0,
    maxLen = 1;

  const expandFromCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        start = left;
        maxLen = right - left + 1;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandFromCenter(i, i); // 홀수
    expandFromCenter(i, i + 1); // 짝수
  }

  return s.substring(start, start + maxLen);
};
