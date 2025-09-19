let [nm, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = nm.trim().split(' ').map(Number);
const game = array.map((a) => a.trim().split(''));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const isVisited = new Array(n).fill(false).map((_) => new Array(m).fill(false));
let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (answer === 1) break;
    if (!isVisited[i][j]) {
      let start = { x: i, y: j };
      dfs(i, j, 0, start);
    }
  }
}

function dfs(x, y, count, start) {
  if (answer === 1) return;
  if (count >= 4 && x === start.x && y === start.y) {
    answer = 1;
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < m &&
      !isVisited[nx][ny] &&
      game[nx][ny] === game[x][y]
    ) {
      isVisited[nx][ny] = true;
      dfs(nx, ny, count + 1, start);
      isVisited[nx][ny] = false;
    }
  }
}

console.log(answer === 1 ? 'Yes' : 'No');
