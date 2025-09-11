let [nm, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = nm.split(' ').map(Number);
array = array.map((a) => a.trim().split(' ').map(Number));
let visited = Array(N + 1).fill(false);
const graph = new Array(n + 1).fill(0).map((_) => new Array(m + 1).fill(0));
let answer = 0;

settingGraph();

function settingGraph() {
  for (let i = 0; i < array.length; i++) {
    const [u, v] = array[i];
    graph[u][v] = 1;
    graph[v][u] = 1;
  }
}

const dfs = (start) => {
  visited[start] = true;
  for (const vertax of graph[start]) {
    if (!visited[vertax]) {
      dfs(vertax);
    }
  }
};

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    answer++;
  }
}
console.log(answer);
