let [n, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = parseInt(n);

const tree = new Array(n + 1).fill(0).map((_) => new Array());
let answer = new Array(n).fill(0);

for (let i = 0; i < n - 1; i++) {
  const [a, b] = array[i].trim().split(' ').map(Number);
  tree[a].push(b);
  tree[b].push(a);
}

const isVisited = new Array(n + 1).fill(false);
isVisited[1] = true;

function dfs(idx) {
  for (let i = 0; i < tree[idx].length; i++) {
    if (!isVisited[tree[idx][i]]) {
      answer[tree[idx][i]] = idx;
      isVisited[tree[idx][i]] = true;
      dfs(tree[idx][i]);
    }
  }
}

dfs(1);
console.log(answer.slice(2).join('\n'));
