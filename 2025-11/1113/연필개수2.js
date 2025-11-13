const fs = require('fs');
const stdin = Number(fs.readFileSync('input.txt').toString().trim());

function solution() {
  let answer;
  const 몫더하기1 = Math.ceil(stdin / 12);
  const 나머지 = stdin % 12;
  if (나머지 > 0) {
    answer = 몫더하기1;
  } else {
    answer = stdin / 12;
  }
  console.log(answer);
}
solution();
