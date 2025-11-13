const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().trim().split('');

function solution() {
  const answer = stdin.map((v) => v.replace('A', '#'));
  console.log(answer.join(''));
}

solution();
