const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().trim().split('\n');

function solution() {
  const [strings, amount] = stdin;
  const stringsArray = strings.split('');

  const answer = stringsArray.filter((string) => string === amount).length;
  console.log(answer);
}

solution();
