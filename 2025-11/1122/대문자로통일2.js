const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().trim().split('');

function solution() {
  const answer = stdin
    .map((string) => (string = string.toUpperCase()))
    .join('');

  console.log(answer);
}

solution();
