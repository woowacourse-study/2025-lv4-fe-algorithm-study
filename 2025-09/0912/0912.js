function solution(s) {
  var strLengthArr = [];
  strLengthArr.push(s.length);

  // 1부터 s.length /2 까지 split 하고 압축 후 최소 길이 찾기
  for (let splitLength = 1; splitLength <= s.length / 2; splitLength++) {
    let splitStr = '';
    let prvStr = s.slice(0, splitLength);
    let count = 1;
    for (let i = splitLength; i < s.length; i += splitLength) {
      const currentStr = s.slice(i, i + splitLength);
      if (prvStr === currentStr) {
        count++;
      } else {
        splitStr += (count > 1 ? count : '') + prvStr;
        prvStr = currentStr;
        count = 1;
      }
    }
    splitStr += (count > 1 ? count : '') + prvStr;

    strLengthArr.push(splitStr.length);
  }
  return Math.min(...strLengthArr);
}

const ex1 = solution('aabbaccc');
const ex2 = solution('ababcdcdababcdcd');
const ex3 = solution('abcabcdede');
const ex4 = solution('abcabcabcabcdededededede');
const ex5 = solution('xababcdcdababcdcd');

console.log(ex1, ex1 === 7);
console.log(ex2, ex2 === 9);
console.log(ex3, ex3 === 8);
console.log(ex4, ex4 === 14);
console.log(ex5, ex5 === 17);
