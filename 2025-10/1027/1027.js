let arr;
let visitArr;

function solution(n, computers) {
  let ctr = 0;
  arr = computers;
  visitArr = Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    ctr += dfs(i);
  }
  return ctr;
}

function dfs(i) {
  if (visitArr[i]) return 0;
  visitArr[i] = true;

  for (let j in arr[i]) {
    if (arr[i][j] === 1) {
      dfs(j);
    }
  }
  return 1;
}
