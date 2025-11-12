const fs = require('fs');
const stdin = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution() {
  const [a, b, c] = stdin;
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  console.log(answer);
}

solution();
