function solution(maps) {
  let maxX = maps.length;
  let maxY = maps[0].length;
  let answer = (maxX + 1) * (maxY + 1);
  let queue = [[0, 0, 1]];
  const visited = Array.from({ length: maxX }, () =>
    new Array(maxY).fill(false)
  );

  while (queue.length) {
    const [x, y, currCount] = queue.shift();

    if (x === maxX - 1 && y === maxY - 1) {
      answer = Math.min(answer, currCount);
      continue;
    }

    if (x + 1 < maxX && maps[x + 1][y] === 1 && !visited[x + 1][y]) {
      visited[x + 1][y] = true;
      queue.push([x + 1, y, currCount + 1]);
    }
    if (x - 1 >= 0 && maps[x - 1][y] === 1 && !visited[x - 1][y]) {
      visited[x - 1][y] = true;
      queue.push([x - 1, y, currCount + 1]);
    }
    if (y + 1 < maxY && maps[x][y + 1] === 1 && !visited[x][y + 1]) {
      visited[x][y + 1] = true;
      queue.push([x, y + 1, currCount + 1]);
    }
    if (y - 1 >= 0 && maps[x][y - 1] === 1 && !visited[x][y - 1]) {
      visited[x][y - 1] = true;
      queue.push([x, y - 1, currCount + 1]);
    }
  }

  if (answer === (maxX + 1) * (maxY + 1)) return -1;
  return answer;
}
