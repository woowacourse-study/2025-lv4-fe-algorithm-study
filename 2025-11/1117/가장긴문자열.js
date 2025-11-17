const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().trim().split('\n');

function solution() {
  const [, ...rest] = stdin;

  const a = rest.sort((a, b) => b.length - a.length);
  console.log(a[0]);
}

solution();
