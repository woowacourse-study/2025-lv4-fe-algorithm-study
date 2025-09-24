let [n, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = parseInt(n);
let subway = Array.from({ length: n + 1 }, () => Array());
let isVisited = new Array(n + 1).fill(false);

for (let i = 0; i < array.length; i++) {
  const [start, end] = array[i].trim().split(' ').map(Number);
  subway[start].push(end);
  subway[end].push(start);
}

let start = 0;
let cycle;
let flag = false;
for (let i = 1; i < n + 1; i++) {
  if (flag) break;
  if (!isVisited[i]) {
    isVisited[i] = true;
    start = i;
    dfs(i, 1);
    isVisited[i] = false;
  }
}

function dfs(idx, n) {
  if (flag) return;
  for (let i = 0; i < subway[idx].length; i++) {
    const next = subway[idx][i];
    if (!isVisited[next]) {
      isVisited[next] = true;
      dfs(next, n + 1);
      isVisited[next] = false;
    } else {
      if (n >= 3 && start === next) {
        flag = true;
        cycle = isVisited.slice();
        return;
      }
    }
  }
}
const answer = [];

for (let i = 1; i < n + 1; i++) {
  bfs(i);
}

function bfs(idx) {
  if (cycle[idx]) {
    answer.push(0);
    return;
  }

  const queue = [];
  const visited = new Array(n + 1).fill(false);
  queue.push([idx, 1]);
  visited[idx] = true;
  while (queue.length > 0) {
    // console.log(queue);
    const [i, count] = queue.shift();

    for (let k = 0; k < subway[i].length; k++) {
      const next = subway[i][k];
      if (cycle[next]) {
        answer.push(count);
        return;
      }
      if (!visited[next]) {
        // 방문하지 않은 경우에만 큐에 추가
        visited[next] = true;
        queue.push([next, count + 1]);
      }
    }
  }
}

console.log(answer.join(' '));
