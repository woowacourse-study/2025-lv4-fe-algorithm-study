const fs = require('fs');
const stdin = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution() {
  const answer = stdin.sort((a, b) => a - b);
  console.log(answer[0]);
}

solution();
