const [...testCase] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < testCase.length; i++) {
  const [w, h] = testCase[i].split(' ').map(Number);
  if (w === 0 && h === 0) break;
  const graph = [];
  for (let j = i + 1; j <= i + h; j++) {
    graph.push(testCase[j].split(' ').map(Number));
  }
  // console.log(graph);
  console.log(findIsland(graph));
  i = i + h;
}

function findIsland(graph) {
  const dx = [1, -1, 0, 0, 1, -1, -1, 1];
  const dy = [0, 0, 1, -1, 1, 1, -1, -1];
  const isVisit = new Array(graph.length)
    .fill(false)
    .map((_) => new Array(graph[0].length).fill(false));
  let island = 0;

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      if (graph[i][j] === 1 && !isVisit[i][j]) {
        isVisit[i][j] = true;
        dfs(i, j);
        island++;
      }
    }
  }
  return island;

  function dfs(x, y) {
    for (let i = 0; i < dx.length; i++) {
      if (
        x + dx[i] >= 0 &&
        x + dx[i] < graph.length &&
        y + dy[i] >= 0 &&
        y + dy[i] < graph[0].length &&
        graph[x + dx[i]][y + dy[i]] === 1 &&
        !isVisit[x + dx[i]][y + dy[i]]
      ) {
        isVisit[x + dx[i]][y + dy[i]] = true;
        dfs(x + dx[i], y + dy[i]);
      }
    }
  }
}
