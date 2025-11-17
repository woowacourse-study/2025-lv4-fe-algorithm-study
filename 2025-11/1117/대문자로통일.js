const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().trim();

function solution() {
  let answer = '';
  for (let x of stdin) {
    answer += x.toUpperCase();
  }
  console.log(answer);
}

solution();
