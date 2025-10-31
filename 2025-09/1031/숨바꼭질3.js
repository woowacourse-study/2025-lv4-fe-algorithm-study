const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const MAX = 100_001;

const visited = Array.from({ length: 2 * MAX }, () => Number.MAX_SAFE_INTEGER);

const [n, k] = input[0].split(' ').map(Number);
visited[n] = 0;

const action = ['multi', 'add', 'minus'];
const ACTIONS = {
  multi: (x) => x * 2,
  add: (x) => x + 1,
  minus: (x) => x - 1,
};

const bfs = () => {
  const queue = [n];
  let index = 0;
  while (queue.length > index) {
    const cur = queue[index++];

    if (cur < 0 || cur >= 2 * MAX || visited[cur] === Number.MAX_SAFE_INTEGER) {
      continue;
    }

    for (let act of action) {
      const next = ACTIONS[act](cur);
      if (act === 'multi') {
        if (visited[next] > visited[cur]) {
          visited[next] = visited[cur];
          queue.push(next);
        }
      } else {
        if (visited[next] > visited[cur]) {
          visited[next] = visited[cur] + 1;
          queue.push(next);
        }
      }
    }
  }
};

bfs();

console.log(visited[k]);
