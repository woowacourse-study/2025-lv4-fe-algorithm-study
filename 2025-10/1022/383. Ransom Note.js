/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineMap = {};
  for (const char of magazine) {
    if (!magazineMap[char]) {
      magazineMap[char] = 1;
      continue;
    }
    magazineMap[char] += 1;
  }
  for (const char of ransomNote) {
    if (!magazineMap[char]) return false;
    magazineMap[char] -= 1;
  }

  return true;
};
