function solution(participant, completion) {
  const part = {};
  for (const p of participant) {
    if (!part[p]) {
      part[p] = 1;
      continue;
    }
    part[p]++;
  }

  for (const c of completion) {
    part[c]--;
  }
  Object.entries(part).map(([key, value]) => {
    if (value > 0) answer = key;
  });
  return answer;
}
