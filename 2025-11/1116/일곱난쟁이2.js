const fs = require('fs');
const stdin = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution() {
  const sum = stdin.reduce((acc, cur) => acc + cur, 0);
  for (let i = 0; i < stdin.length; i++) {
    for (let j = i + 1; j < stdin.length; j++) {
      if (sum - (stdin[i] + stdin[j]) === 100) {
        const answer = stdin.filter(
          (num) => num !== stdin[i] && num !== stdin[j]
        );
        console.log(answer.join(' '));
      }
    }
  }
}

solution();
