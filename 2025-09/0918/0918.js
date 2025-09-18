const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().split(' ').map(Number);

const [N, K] = stdin;
// N은 수빈이가 있는 위치
// K는 동생이 있는 위치

const queue = [[N, 0]];
const visited = new Array(100_001).fill(false);

while (queue.length) {
  const [cur, depth] = queue.shift();

  if (visited[cur]) {
    continue;
  }

  visited[cur] = true;

  if (cur === K) {
    console.log(depth);
    break;
  }

  for (let next of [cur + 1, cur - 1, cur * 2]) {
    if (!visited[next] && next >= 0 && next <= 100_000) {
      queue.push([next, depth + 1]);
    }
  }
}
