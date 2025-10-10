// 도넛 모양 그래프 : n개의 정점과 n개의 간선
// 막대 모양 그래프 : n개의 정점과 n-1개의 간선
// 8자 모양 그래프 : 2n+1개의 정점과 2n+2개의 간선

function solution(edges) {
  // 1) 노드 수 파악

  const nodes = new Set();
  let maxNode = 0;
  for (const [u, v] of edges) {
    nodes.add(u);
    nodes.add(v);
    if (u > maxNode) maxNode = u;
    if (v > maxNode) maxNode = v;
  }

  // 2) 차수 배열 준비
  const inDe = Array(maxNode + 1).fill(0);
  const outDe = Array(maxNode + 1).fill(0);

  // 3) 차수 집계
  for (const [u, v] of edges) {
    inDe[v]++;
    outDe[u]++;
  }

  // 4) 생성 정점 찾기
  let gen = -1;
  for (let i of nodes) {
    if (inDe[i] === 0 && outDe[i] >= 2) {
      gen = i;
      break;
    }
  }

  // 5) 막대 모양 그래프 개수, 8자 모양 그래프 개수 찾기
  let stick = 0,
    eight = 0;
  for (let i of nodes) {
    if (i === gen) continue;
    if (outDe[i] === 0) {
      stick++;
    } else if (inDe[i] >= 2 && outDe[i] >= 2) {
      eight++;
    }
  }

  // 6) 도넛모양 그래프 개수
  const donut = outDe[gen] - stick - eight;
  return [gen, donut, stick, eight];
}
