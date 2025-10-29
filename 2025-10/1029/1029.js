let [nm, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

let [n, m] = nm.trim().split(' ').map(Number);
let map = array.map((a) => a.trim().split(' ').map(Number));

const isVisited = new Array(n).fill(false).map((_) => new Array(m).fill(false));
const newArr = [];
let max = 0;

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    dfs(i, j);
    special(i, j);
  }
}

console.log(max);

function dfs(x, y) {
  if (newArr.length === 4) {
    const sum = price(newArr);
    max = Math.max(sum, max);
    return;
  }

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < m && !isVisited[nx][ny]) {
      isVisited[x][y] = true;
      newArr.push(map[x][y]);
      dfs(nx, ny);
      isVisited[x][y] = false;
      newArr.pop();
    }
  }
}

function price(array) {
  return array.reduce((prev, curr) => prev + curr, 0);
}

function special(x, y) {
  const shape = [
    //ㅜ
    [
      [1, 0],
      [2, 0],
      [1, -1],
    ],
    // ㅗ
    [
      [1, 0],
      [2, 0],
      [1, 1],
    ],
    //ㅏ
    [
      [0, -1],
      [0, -2],
      [1, -1],
    ],
    //ㅓ
    [
      [0, -1],
      [0, -2],
      [-1, -1],
    ],
  ];
  for (let el of shape) {
    let sum = map[x][y];
    for (let [dx, dy] of el) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) break;
      sum += map[nx][ny];
    }
    max = Math.max(max, sum);
  }
}
