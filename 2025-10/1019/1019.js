let [n, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = parseInt(n);

const map = new Map();
const plusArr = array.map((a) => a.trim().split(''));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < plusArr[i].length; j++) {
    const count = Math.pow(10, plusArr[i].length - 1 - j);
    map.set(plusArr[i][j], (map.get(plusArr[i][j]) || 0) + count);
  }
}

let maxSum = 0;
let num = 9;
const sortMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

for (let [alphabet, number] of sortMap) {
  maxSum += number * num;
  num--;
}

console.log(maxSum);
