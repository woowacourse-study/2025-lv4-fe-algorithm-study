const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, k] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

const factorial = (n) => {
  let answer = 1;

  for (let i = 2; i <= n; i++) {
    answer *= i;
  }

  return answer;
};
console.log(factorial(n) / (factorial(k) * factorial(n - k)));
