const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().trim().split('');

function solution() {
  const answer = stdin.filter((string) => string === string.toUpperCase());
  console.log(answer.length);
}

solution();
