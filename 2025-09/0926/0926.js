const [n, k] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const MAX_SIZE = 100_001;

function bfs() {
  const isVisited = new Array(MAX_SIZE).fill(false);
  const queue = [];
  queue.push([n, 0, `${n}`]);
  let pointer = 0;

  while (queue.length > 0) {
    const [idx, time, jump] = queue[pointer];
    if (idx === k) {
      return { time, jump };
    }

    if (idx * 2 < MAX_SIZE && !isVisited[idx * 2]) {
      queue.push([idx * 2, time + 1, `${jump} ${idx * 2}`]);
      isVisited[idx * 2] = true;
    }
    if (idx + 1 < MAX_SIZE && !isVisited[idx + 1]) {
      queue.push([idx + 1, time + 1, `${jump} ${idx + 1}`]);
      isVisited[idx + 1] = true;
    }
    if (idx - 1 >= 0 && !isVisited[idx - 1]) {
      queue.push([idx - 1, time + 1, `${jump} ${idx - 1}`]);
      isVisited[idx - 1] = true;
    }

    pointer += 1;
  }
}

const { time, jump } = bfs();
console.log(time + '\n' + jump);
