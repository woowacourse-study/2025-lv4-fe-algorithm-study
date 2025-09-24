const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().split('\n').map(Number);

const testCaseNumber = stdin[0];
stdin.shift();

function residentsAt(k, n) {
  if (k === 0) return n;
  const floor = new Array(n + 1).fill(0);
  for (let r = 1; r <= n; r++) floor[r] = r; // 0층 초기화
  for (let f = 1; f <= k; f++) {
    for (let r = 1; r <= n; r++) {
      floor[r] = floor[r] + floor[r - 1];
    }
  }
  return floor[n];
}

function solution() {
  const numbers = stdin.filter(Number.isFinite);
  const answers = [];
  const pairCount = Math.min(testCaseNumber, Math.floor(numbers.length / 2));
  for (let i = 0; i < pairCount * 2; i += 2) {
    const k = numbers[i];
    const n = numbers[i + 1];
    answers.push(residentsAt(k, n));
  }
  console.log(answers.join('\n'));
}

solution();
