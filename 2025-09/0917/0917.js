function findIdx(score) {
  let start = 0,
    end = cop.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (cop[mid] <= score) end = mid - 1;
    else start = mid + 1;
  }
  return start + 1;
}

function climbingLeaderboard(ranked, player) {
  const sol = [];
  cop = Array.from(new Set(ranked)).sort((a, b) => b - a);
  for (const score of player) {
    let idx = findIdx(score);
    sol.push(idx);
  }
  return sol;
}
