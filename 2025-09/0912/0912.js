let [n, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = parseInt(n);
const graph = array.map((a) => a.trim().split('').map(Number));

const visitedGraph = new Array(n)
  .fill(false)
  .map((_) => new Array(n).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let ans = [];
let home = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visitedGraph[i][j] && graph[i][j] === 1) {
      home++;
      visitedGraph[i][j] = true;
      dfs(i, j);
      ans.push(home);
      home = 0;
    }
  }
}

console.log(
  ans.length +
    '\n' +
    ans
      .sort((a, b) => a - b)
      .join('\n')
      .trim()
);

function dfs(p, q) {
  // console.log('p', p, 'q', q, 'home', home);
  for (let i = 0; i < 4; i++) {
    if (
      p + dy[i] >= 0 &&
      p + dy[i] < n &&
      q + dx[i] >= 0 &&
      q + dx[i] < n &&
      !visitedGraph[p + dy[i]][q + dx[i]] &&
      graph[p + dy[i]][q + dx[i]] === 1
    ) {
      visitedGraph[p + dy[i]][q + dx[i]] = true;
      home++;
      dfs(p + dy[i], q + dx[i]);
    }
  }
}
