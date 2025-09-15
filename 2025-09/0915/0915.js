let [nm, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);
const map = array.map((a) => a.trim().split('').map(Number));
const isVisited = new Array(n).fill(false).map((_) => new Array(m).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
console.log(bfs());

function bfs() {
  const queue = [[0, 0, 1]];
  isVisited[0][0] = true;

  while (queue.length) {
    const [i, j, count] = queue.shift();

    if (i === n - 1 && j === m - 1) {
      return count;
    }
    for (let k = 0; k < 4; k++) {
      const nx = i + dx[k];
      const ny = j + dy[k];
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        !isVisited[nx][ny] &&
        map[nx][ny] === 1
      ) {
        isVisited[nx][ny] = true;
        queue.push([nx, ny, count + 1]);
      }
    }
  }
}
