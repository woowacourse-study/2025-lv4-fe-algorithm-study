const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const N = +input.shift();
const E = +input.shift();
const computers = input.map((el) => el.split(" ").map(Number));
const visited = Array.from({ length: N + 1 }, () => false);
const list = Array.from({ length: N + 1 }, () => []);
let answer = 0;

computers.map(([from, to]) => {
  list[from].push(to);
  list[to].push(from);
});

// DFS
function dfs(node) {
  visited[node] = true;
  for (let i = 0; i < list[node].length; i++) {
    const nextNode = list[node][i];
    if (!visited[nextNode]) {
      answer++;
      dfs(nextNode);
    }
  }
}

// BFS - shift() 사용 방식
function bfs_shift(node) {
  let queue = [node];
  while (queue.length) {
    const curNode = queue.shift();
    if (!visited[curNode]) {
      answer++;
      visited[curNode] = true;
      queue.push(...list[curNode]);
    }
  }
}

// BFS - Dequeue 방식 (단방향 큐)
class Queue {
  constructor() {
    this.list = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.list[this.tail++] = item;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    return this.list[this.head++];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

function bfs_dequeue(node) {
  const queue = new Queue();
  queue.enqueue(node);

  while (!queue.isEmpty()) {
    const curNode = queue.dequeue();
    if (!visited[curNode]) {
      answer++;
      visited[curNode] = true;
      list[curNode].forEach((nextNode) => {
        if (!visited[nextNode]) queue.enqueue(nextNode);
      });
    }
  }
}

dfs(1);
console.log(answer);

bfs_shift(1);
console.log(answer - 1); // 본인 제외

bfs_dequeue(1);
console.log(answer - 1); // 본인 제외
