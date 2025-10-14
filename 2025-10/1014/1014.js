let [n, ...array] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = parseInt(n);
const tree = [];
let answer = '';

for (let i = 0; i < n; i++) {
  const [root, left, right] = array[i].trim().split(' ');
  tree[root] = [left, right];
}
function preOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  answer += node;
  preOrder(left);
  preOrder(right);
}

function inOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  inOrder(left);
  answer += node;
  inOrder(right);
}

function postOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  postOrder(left);
  postOrder(right);
  answer += node;
}

preOrder('A');
answer += '\n';
inOrder('A');
answer += '\n';
postOrder('A');
answer += '\n';

console.log(answer);
