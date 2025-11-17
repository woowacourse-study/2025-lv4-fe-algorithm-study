const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().trim();

function solution() {
  let answer = '';
  for (let i of stdin) {
    if (i === i.toUpperCase()) {
      answer += i.toLowerCase();
    } else {
      answer += i.toUpperCase();
    }
  }
  console.log(answer);
}

solution();
