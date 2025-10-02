const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().split('\n').map(Number);

const [N, ...numbers] = stdin;
const sortedNumbers = numbers.sort((a, b) => a - b);
const answers = sortedNumbers.forEach((sortedNumber) =>
  console.log(sortedNumber)
);
console.log(answers);
