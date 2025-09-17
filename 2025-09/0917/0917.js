const fs = require('fs');
const stdin = fs
  .readFileSync('input.txt')
  .toString()
  .split('\n')
  .map((num) => num.split(' ').map(Number));

function solution() {
  const [cardNum, maximum] = stdin[0];
  const [...numbers] = stdin[1];
  let answers = 0;
  for (let i = 0; i < cardNum; i++) {
    for (let j = i + 1; j < cardNum; j++) {
      for (let k = j + 1; k < cardNum; k++) {
        const sum = numbers[i] + numbers[j] + numbers[k];
        const gap = maximum - sum;
        if (gap >= 0 && answers <= sum) {
          answers = sum;
        }
      }
    }
  }
  console.log(answers);
}

solution();
