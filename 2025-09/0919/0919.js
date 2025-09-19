const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().split('\n');

const n = Number(stdin[0]);
const m = Number(stdin[1]);
let graph = [];

for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = 2; i <= m + 1; i++) {
  const [x, y] = stdin[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}
let cnt = 0;

const visited = new Array(n + 1).fill(false);

function dfs(x) {
  visited[x] = true;
  cnt++;
  for (y of graph[x]) {
    if (!visited[y]) dfs(y);
  }
}

dfs(1);
console.log(cnt - 1);
