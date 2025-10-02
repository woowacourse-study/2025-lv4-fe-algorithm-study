function getCount(lion, peach) {
  let PCount = 0,
    LCount = 0;
  for (let i = 0; i < 11; i++) {
    if (lion[i] === 0 && peach[i] === 0) continue;
    if (lion[i] <= peach[i]) PCount += 10 - i;
    else LCount += 10 - i;
  }
  return LCount - PCount;
}

function solution(n, info) {
  var answer = [];
  let maxCount = 0,
    lionArray = [-1];

  function dfs(remainCount, currentIdx, resultArray) {
    if (currentIdx === 10) {
      resultArray[10] = remainCount;
      const resultScore = getCount(resultArray, info);

      if (maxCount < resultScore) {
        maxCount = resultScore;
        lionArray = [...resultArray];
      } else if (maxCount !== 0 && maxCount === resultScore) {
        for (let i = 10; i >= 0; i--) {
          if (lionArray[i] > resultArray[i]) break;
          else if (lionArray[i] === resultArray[i]) continue;
          else lionArray = [...resultArray];
        }
      }
      return;
    }

    if (remainCount <= 0) {
      dfs(remainCount, 10, resultArray);
      return;
    }

    const needCount = info[currentIdx] + 1;
    if (needCount <= remainCount) {
      resultArray[currentIdx] = needCount;
      dfs(remainCount - needCount, currentIdx + 1, resultArray);
      resultArray[currentIdx] = 0;
    }

    dfs(remainCount, currentIdx + 1, resultArray);
  }

  const startArray = new Array(11).fill(0);
  dfs(n, 0, startArray);

  return lionArray;
}
