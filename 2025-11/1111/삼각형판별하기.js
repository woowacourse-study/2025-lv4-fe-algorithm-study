const fs = require('fs');
const stdin = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution() {
  //가장 긴 변의 길이가 나머지 두 변의 길이의 합보다 작아야 함.
  //1. 세 수 중에 최댓값을 찾아.
  const max = Math.max(...stdin);
  //2. max를 제외한 나머지 두 수는?
  const maxExcept = stdin
    .filter((num) => num !== max)
    .reduce((acc, cur) => acc + cur, 0);
  if (max <= maxExcept) console.log('YES');
  else console.log('NO');
}

solution();
