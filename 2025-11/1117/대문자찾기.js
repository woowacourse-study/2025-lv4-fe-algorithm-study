const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().trim().split('');

function countUpperCaseLetters() {
  let count = 0;
  for (let i = 0; i < stdin.length; i++) {
    const char = stdin[i];
    if (char >= 'A' && char <= 'Z') {
      count++;
    }
  }
  console.log(count);
}

countUpperCaseLetters();

function solution2() {
  let answer = 0;
  for (let x of stdin) {
    if (x === x.toUpperCase()) {
      answer++;
    }
  }
  console.log(answer);
}

solution2();
