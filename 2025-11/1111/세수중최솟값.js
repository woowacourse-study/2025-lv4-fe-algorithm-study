const fs = require('fs');
const stdin = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution() {
  const [A, B, C] = stdin;
  let answer;
  if (A < B) answer = A;
  else answer = B;
  if (C < answer) answer = C;
  console.log(answer);
}

solution();
