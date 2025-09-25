const s = Number(require('fs').readFileSync('input.txt').toString().trim());

function bfs() {
  const queue = [];
  queue.push([1, 0, 0]);
  const isVisited = new Array(1001)
    .fill(false)
    .map((_) => new Array(1001).fill(false));

  while (queue.length > 0) {
    const [n, clib, count] = queue.shift();
    if (n === s) return count;
    if (isVisited[n][clib]) continue;
    isVisited[n][clib] = true;

    if (n >= 1 && n <= 1000) {
      queue.push([n, n, count + 1]);
    }

    if (clib > 0 && n + clib <= 1000) {
      queue.push([n + clib, clib, count + 1]);
    }

    if (n - 1 >= 0) {
      queue.push([n - 1, clib, count + 1]);
    }
  }
}

console.log(bfs());
