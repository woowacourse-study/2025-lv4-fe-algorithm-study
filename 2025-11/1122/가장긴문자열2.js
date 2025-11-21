const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().trim().split('\n');

function solution() {
  const [Nz, ...strings] = stdin;

  const answer = strings.sort((a, b) => b.length - a.length);
  console.log(answer[0]);
}

solution();
