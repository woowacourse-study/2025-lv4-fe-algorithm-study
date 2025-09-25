function solution(N, stages) {
  var answer = [];
  let fail = [];
  const allStages = stages.length;
  for (let i = 1; i < N + 1; i++) {
    let tryCount = 0,
      successCount = 0;
    stages.forEach((stage) => {
      if (stage >= i) tryCount++;
      if (stage > i) successCount++;
    });
    fail.push([successCount / tryCount, i]);
  }
  fail.sort((a, b) => {
    return a[0] - b[0];
  });
  fail.forEach((f) => {
    answer.push(f[1]);
  });

  return answer;
}
