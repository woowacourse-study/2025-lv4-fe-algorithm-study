let [nm, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const [m, n] = nm.split(' ').map(Number);
const tomato = array.map((a) => a.trim().split(' ').map(Number));
const visited = new Array(n).fill(false).map((_) => new Array(m).fill(false));

const queue = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (tomato[i][j] === 1) {
      queue.push([i, j, 0]);
    }
  }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function bfs() {
  let pointer = 0;
  while (queue.length > pointer) {
    const [i, j, day] = queue[pointer];
    for (let k = 0; k < 4; k++) {
      const nx = i + dx[k];
      const ny = j + dy[k];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        !visited[nx][ny] &&
        tomato[nx][ny] === 0
      ) {
        tomato[nx][ny] = 1;
        visited[nx][ny] = true;
        queue.push([nx, ny, day + 1]);
      }
    }
    pointer += 1;
  }
}
bfs();
let answer = queue.length > 0 ? queue[queue.length - 1][2] : 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (tomato[i][j] === 0) answer = -1;
  }
}

console.log(answer);
