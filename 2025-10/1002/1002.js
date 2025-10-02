function solution(n, s, a, b, fares) {
  const INF = 1e15;

  const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));

  // 자기 자신으로 가는 비용은 0으로 초기화
  for (let i = 1; i <= n; i++) {
    dist[i][i] = 0;
  }

  // 직접 연결된 경로 초기화
  for (const [u, v, w] of fares) {
    dist[u][v] = w;
    dist[v][u] = w;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      const tmp = dist[i][k];
      if (tmp === INF) continue;
      for (let j = 1; j <= n; j++) {
        dist[i][j] = Math.min(dist[i][j], tmp + dist[k][j]);
      }
    }
  }

  // 결과 출력 k 번쨰 까지 최소 + k ->a 최소 + k->b 최소
  let result = INF;
  for (let k = 1; k <= n; k++) {
    const total = dist[s][k] + dist[k][a] + dist[k][b];
    result = Math.min(result, total);
  }
  return result;
}
