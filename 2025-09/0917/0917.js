let [t, ...testcase] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < testcase.length; i += 3) {
  const n = parseInt(testcase[i].trim());
  // 시작점
  const [px, py] = testcase[i + 1].trim().split(' ').map(Number);

  // 끝점
  const [fx, fy] = testcase[i + 2].trim().split(' ').map(Number);

  console.log(activeNite(n, px, py, fx, fy));
}

function activeNite(n, px, py, fx, fy) {
  const queue = [];
  const isVisited = new Array(n)
    .fill(false)
    .map((_) => new Array(n).fill(false));

  queue.push([px, py, 0]);
  isVisited[px][py] = true;

  const dx = [-1, -2, -2, -1, 1, 2, 1, 2];
  const dy = [2, 1, -1, -2, -2, -1, 2, 1];

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();
    if (x === fx && y === fy) {
      return count;
    }
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && !isVisited[nx][ny]) {
        queue.push([nx, ny, count + 1]);
        isVisited[nx][ny] = true;
      }
    }
  }
}
