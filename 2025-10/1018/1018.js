let [n, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = parseInt(n);

const tree = Array.from({ length: n + 1 }, () => new Array());

for (let i = 0; i < n - 1; i++) {
  const [a, b, cost] = array[i].trim().split(' ').map(Number);
  tree[a].push([b, cost]);
  tree[b].push([a, cost]);
}
function findMaxLength(node) {
  const isVisited = new Array(n + 1).fill(false);
  isVisited[node] = true;

  const queue = [];
  queue.push([node, 0]);
  let pointer = 0;

  let maxIndex = 0;
  let max = 0;

  while (queue.length !== n) {
    const [node, count] = queue[pointer];

    for (let [i, cost] of tree[node]) {
      if (!isVisited[i]) {
        isVisited[i] = true;
        queue.push([i, count + cost]);

        if (max < count + cost) {
          maxIndex = i;
          max = count + cost;
        }
      }
    }
    pointer += 1;
  }

  return { maxIndex, max };
}

const { maxIndex } = findMaxLength(1);
const { max } = findMaxLength(maxIndex);

console.log(max);
