const [n, k] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const MAX = 100001;
function dfs() {
  const queue = [];
  queue.push([n, 0]);
  let point = 0;
  const isVisited = new Array(MAX).fill(false);

  while (queue.length > 0) {
    // console.log(queue, point);
    const [idx, count] = queue[point];
    if (isVisited[idx]) {
      point += 1;
      continue;
    }

    isVisited[idx] = true;

    if (idx === k) {
      return count;
    }
    if (idx * 2 < MAX) {
      queue.push([idx * 2, count]);
    }
    if (idx - 1 >= 0) {
      queue.push([idx - 1, count + 1]);
    }

    if (idx + 1 < MAX) {
      queue.push([idx + 1, count + 1]);
    }

    point += 1;
  }
}

console.log(dfs());
