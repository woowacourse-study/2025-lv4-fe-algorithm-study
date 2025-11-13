const fs = require('fs');
const stdin = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution() {
  const odds = stdin.filter((num) => num % 2 !== 0);
  const sum = odds.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);

  const min = Math.min(...odds);
  console.log(min);
}
solution();
