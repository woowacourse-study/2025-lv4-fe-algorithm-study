function solution(info, edges) {
  const nodes = makeNodes(edges);
  let answer = 0;

  function dfs(sheep, wolf, currNode, nextNodes) {
    if (info[currNode] === 0) sheep++;
    else wolf++;

    if (wolf >= sheep) return;
    answer = Math.max(answer, sheep);

    const newNextNodes = [...nextNodes];
    if (nodes[currNode]) {
      for (let child of nodes[currNode]) {
        newNextNodes.push(child);
      }
    }

    for (let i = 0; i < newNextNodes.length; i++) {
      const next = newNextNodes[i];
      dfs(
        sheep,
        wolf,
        next,
        newNextNodes.filter((_, idx) => idx !== i)
      );
    }
  }

  dfs(0, 0, 0, []);
  return answer;
}

function makeNodes(edges) {
  return edges.reduce((acc, [start, end]) => {
    if (!acc[start]) acc[start] = [];
    acc[start].push(end);
    return acc;
  }, {});
}
