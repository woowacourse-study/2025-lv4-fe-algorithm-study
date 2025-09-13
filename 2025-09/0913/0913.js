const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().split(' ').map(Number);

function solution() {
  const [A, B, C] = stdin;

  const secondResult = (A % C) + (B % C);
  const fourthResult = (A % C) * (B % C);
  console.log((A + B) % C);
  console.log(secondResult % C);
  console.log((A * B) % C);
  console.log(fourthResult % C);
}

solution();
