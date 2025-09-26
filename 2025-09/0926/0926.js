const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().split(' ').map(Number);

function solution() {
  const [A, B] = stdin;

  const A약수들 = new Array(A)
    .fill(0)
    .map((num, i) => num + i + 1)
    .filter((_, i) => A % (i + 1) === 0);

  const B약수들 = new Array(B)
    .fill(0)
    .map((num, i) => num + i + 1)
    .filter((_, i) => B % (i + 1) === 0);

  const 최대공약수 = Math.max(...A약수들.filter((x) => B약수들.includes(x)));

  const 최소공배수 = (A * B) / 최대공약수;

  console.log(최대공약수);
  console.log(최소공배수);
}

solution();
