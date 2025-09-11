let [ns, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, s] = ns.split(' ').map(Number);
const array = arr.split(' ').map(Number);
const newArray = [];
let answer = 0;

dfs();
console.log(answer);
function dfs(start = 0) {
  if (newArray.length > 0) {
    // console.log(newArray);
    const add = newArray.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    // console.log('add', add);
    if (add === s) answer++;
  }

  for (let i = start; i < n; i++) {
    newArray.push(array[i]);
    dfs(i + 1);
    newArray.pop();
  }
}
