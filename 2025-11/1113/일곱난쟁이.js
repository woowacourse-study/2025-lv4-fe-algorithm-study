const fs = require('fs');
const stdin = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution() {
  // stdin 중에 합 100되는거 찾자
  const total = stdin.reduce((acc, cur) => acc + cur, 0);
  let answer = stdin;
  for (let i = 0; i < answer.length; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      if (total - answer[i] - answer[j] === 100) {
        answer = answer.filter((_, index) => index !== i && index !== j);
      }
    }
  }
  console.log(answer.join(' '));
}

solution();
