let [n, array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = parseInt(n);
array = array.trim().split(' ').map(Number).sort();

const answerArr = [];
const newArr = [];
const isVisited = new Array(n).fill(false);

function dfs(start = 0) {
  const sum = newArr.reduce((prev, curr) => prev + curr, 0);
  answerArr[sum] = true;

  for (let i = start; i < n; i++) {
    if (isVisited[i]) continue;
    newArr.push(array[i]);
    isVisited[i] = true;
    dfs(i);
    newArr.pop();
    isVisited[i] = false;
  }
}

dfs();

for (let i = 0; i < answerArr.length; i++) {
  if (!answerArr[i]) {
    console.log(i);
    break;
  }
  if (i === answerArr.length - 1) {
    console.log(i + 1);
  }
}
