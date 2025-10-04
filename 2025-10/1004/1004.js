function solution(n, weak, dist) {
  // n은 1이상 200 이하
  // weak의 길이는 1이상 15이하
  // dist의 길이는 1이상 8이하
  const W = weak.length;
  const ext = weak.concat(weak.map((x) => x + n));
  dist.sort((a, b) => b - a); // 긴 친구 먼저 쓰면 탐색이 줄어듦

  // 길이 k인 순열을 순회하다가 "성공"을 찾으면 즉시 true를 반환하는 헬퍼
  function permuteLenK(arr, k, cb, used = Array(arr.length).fill(false), pick = []) {
    if (pick.length === k) return cb(pick); // cb가 true면 바로 전파
    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      pick.push(arr[i]);
      if (permuteLenK(arr, k, cb, used, pick)) return true;
      pick.pop();
      used[i] = false;
    }
    return false;
  }

  // k명의 친구로 덮을 수 있나?
  function canCoverWith(k) {
    return permuteLenK(dist, k, (p) => {
      // p: 길이 k의 순열
      for (let s = 0; s < W; s++) {
        // 시작점을 weak의 각 지점으로
        let idx = s,
          f = 0,
          reach = ext[s] + p[0];
        while (idx < s + W) {
          if (ext[idx] <= reach) {
            // 커버됨 → 다음 약점
            idx++;
          } else {
            // 못 덮음 → 다음 친구 투입
            f++;
            if (f >= k) break; // 친구 다 씀 → 실패
            reach = ext[idx] + p[f];
          }
        }
        if (idx === s + W) return true; // 전부 덮음 → 성공
      }
      return false; // 이 순열/모든 시작점 실패
    });
  }

  for (let k = 1; k <= dist.length; k++) {
    if (canCoverWith(k)) return k;
  }
  return -1;
}
