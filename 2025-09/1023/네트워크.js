// dfs
function solution(n, computers) {
  var answer = 0;
  const graph = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === j) {
        continue;
      }
      const connected = computers[i][j];
      if (connected) {
        graph[i].push(j);
      }
    }
  }

  function dfs(node, visited) {
    for (let next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        dfs(next, visited);
      }
    }
  }

  const visited = Array.from({ length: n }, () => false);
  for (let i = 0; i < n; i += 1) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(i, visited);
      answer += 1;
    }
  }

  return answer;
}

// bfs
function solution(n, computers) {
  var answer = 0;
  const graph = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === j) {
        continue;
      }
      const connected = computers[i][j];
      if (connected) {
        graph[i].push(j);
      }
    }
  }

  function bfs(node, visited) {
    const queue = [node];
    let index = 0;

    while (queue.length > index) {
      const cur = queue[index++];
      for (let next of graph[cur]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }
  }

  const visited = Array.from({ length: n }, () => false);
  for (let i = 0; i < n; i += 1) {
    if (!visited[i]) {
      visited[i] = true;
      bfs(i, visited);
      answer += 1;
    }
  }

  return answer;
}
