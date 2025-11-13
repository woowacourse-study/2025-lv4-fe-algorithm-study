const fs = require('fs');
const N = Number(fs.readFileSync('input.txt').toString().trim());

function solution() {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  console.log(sum);
}

solution();
