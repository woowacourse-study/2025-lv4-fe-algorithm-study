let [mn, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [m, n] = mn.split(' ').map(Number);
const map = array.map((a) => a.trim().split('').map(Number));
const visited = new Array(n).fill(false).map((_) => new Array(n).fill(false));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function dfs() {
  const queue = [];
  queue.push([0, 0, 0]);
  visited[0][0] = true;

  while (queue.length > 0) {
    const [x, y, cnt] = queue.shift();

    if (x === n - 1 && y === m - 1) {
      console.log(cnt);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny]) {
        visited[nx][ny] = true;

        if (map[nx][ny] === 1) {
          queue.push([nx, ny, cnt + 1]);
        } else {
          queue.unshift([nx, ny, cnt]);
        }
      }
    }
  }
}

dfs();
