const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);
let index = 1;
const answer = [];
for (let tc = 0; tc < T; tc += 1) {
  const N = Number(input[index++]);
  const applicants = input.slice(index, index + N).map((row) => row.split(' ').map(Number));
  index += N;

  applicants.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  console.log(applicants);
  let cnt = 0;
  let left = 0;

  for (let right = 1; right < N; right += 1) {
    if (applicants[left][1] < applicants[right][1]) {
      cnt += 1;
    } else {
      left = right;
    }
  }

  answer.push(N - cnt);
}

console.log(answer.join('\n'));
