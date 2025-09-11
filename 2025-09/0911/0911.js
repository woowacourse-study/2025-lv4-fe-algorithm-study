let count = 0;
let maxArea = 0;

function checkCondition(node, matrix) {
  const [x, y] = node;
  if (x < m && x >= 0 && y < n && y >= 0 && matrix[y][x] === 1) {
    count++;
    matrix[y][x] = 0;
    dfs(matrix, [x, y]);
  }
}

function dfs(matrix, node) {
  const [x, y] = node;

  checkCondition([x + 1, y], matrix);
  checkCondition([x - 1, y], matrix);

  checkCondition([x, y + 1], matrix);
  checkCondition([x, y - 1], matrix);

  checkCondition([x - 1, y + 1], matrix);
  checkCondition([x + 1, y + 1], matrix);

  checkCondition([x + 1, y - 1], matrix);
  checkCondition([x - 1, y - 1], matrix);
}

function connectedCell(matrix) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] = 0;
        count = 1;
        dfs(matrix, [j, i]);
        maxArea = Math.max(maxArea, count);
      }
    }
  }
  return maxArea;
}
