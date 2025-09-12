let [nm, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = nm.split(' ').map(Number);
array = array.map((a) => a.trim().split(' ').map(Number));
let visited = Array(N + 1).fill(false);
const graph = new Array(N + 1).fill(0).map((_) => new Array(N + 1).fill(0));
let answer = 0;

settingGraph();

function settingGraph() {
  for (let i = 0; i < array.length; i++) {
    const [u, v] = array[i];
    graph[u][v] = 1;
    graph[v][u] = 1;
  }
}

function dfs(i) {
  visited[i] = true;
  for (let j = 1; j < N + 1; j++) {
    if (graph[i][j] === 1 && !visited[j]) {
      dfs(j);
    }
  }
}

for (let i = 1; i <= N; i++) {
  if (visited[i]) continue;
  dfs(i);
  answer++;
}

console.log(answer);
