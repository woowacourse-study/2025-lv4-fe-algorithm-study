const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().trim().split('\n');

function solution() {
  const [_, ...lines] = stdin;
  const numbers = [];

  lines.forEach((line) => {
    numbers.push(Number(line));
  });

  const sortedNumbers = numbers.sort((a, b) => a - b).join('\n');

  console.log(sortedNumbers);
}

solution();
