const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().trim();
const N = Number(stdin);

function solution() {
  //나머지가 0보다 크고 12보다 작으면 + 1
  // 그렇지않으면 그냥 몫을 출력
  let answer;
  const 몫 = Math.floor(N / 12);
  const 나머지 = N % 12;
  if (나머지 > 0 && 나머지 < 12) answer = 몫 + 1;
  else {
    answer = 몫;
  }
  console.log(answer);
}

solution();
