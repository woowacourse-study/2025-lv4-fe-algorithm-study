/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const sStack = []
  const tStack = []


  for (const char of s) {
      if (char === "#") {
          sStack.pop(char)
      } else {
          sStack.push(char)
      }
  }
  for (const char of t) {
      if (char === "#") {
          tStack.pop(char)
      } else {
          tStack.push(char)
      }
  }

  return sStack.join("") == tStack.join("")
};