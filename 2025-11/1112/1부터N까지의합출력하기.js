const fs = require('fs');
const N = Number(fs.readFileSync('input.txt').toString().trim());

function solution() {
  //1. 1부터 N까지의 수를 배열로 만들어
  //2. reduce로 합을 구해

  //아니면 결국 팩토리알 인데,
  let array = [];
  for (let i = 1; i <= N; i++) {
    array.push(i);
  }

  console.log(array.reduce((acc, cur) => acc + cur, 0));
}
solution();
