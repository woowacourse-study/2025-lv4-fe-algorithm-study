function solution(n, s, a, b, fares) {
  var answer = Infinity

  // S는 달라질 수 있다. -> 모든 지점에서 다른 모든 지점까지의 거리를 알아야 한다.
  // 어디까지 합승하고, 어디부터 각자 가야할까.

  // 플로이드 워셜
  // 모든 지점에서 다른 모든 지점까지의 최단 거리를 Infinity로 초기화
  const graph = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => Infinity),
  )

  // 주어진 요금 정보로 그래프 초기화
  for (let [c, d, f] of fares) {
    graph[c][d] = f
    graph[d][c] = f
  }

  // 자기 자신으로 가는 비용은 0
  for (let i = 1; i <= n; i += 1) {
    graph[i][i] = 0
  }

  // 플로이드 워셜 알고리즘 수행
  // k는 거쳐가는 노드
  for (let k = 1; k <= n; k += 1) {
    // i는 출발 노드
    for (let i = 1; i <= n; i += 1) {
      if (i === k) {
        continue
      }
      // j는 도착 노드
      for (let j = 1; j <= n; j += 1) {
        if (i === j || j === k) {
          continue
        }
        // i에서 j로 가는 비용은, i에서 j로 가는 비용과 i에서 k를 거쳐 j로 가는 비용 중 더 작은 값으로 갱신
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j])
      }
    }
  }

  // s에서 출발해서 i까지 합승하고, i에서 a, b까지 각각 가는 비용의 최솟값 계산
  for (let i = 1; i <= n; i += 1) {
    answer = Math.min(answer, graph[s][i] + graph[i][a] + graph[i][b])
  }

  return answer
}
