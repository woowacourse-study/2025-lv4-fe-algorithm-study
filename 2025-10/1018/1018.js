function solution(begin, target, words) {
  // words에 target을 포함하지 않는 경우
  if (!words.includes(target)) return 0;

  // words 에서 찾기
  const visited = new Set();
  const queue = [[begin, 0]]; // [현재 단어, 변환 횟수]

  const diff1 = (a, b) => {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) diff++;
      if (diff > 1) return false;
    }
    return diff === 1;
  };

  while (queue.length) {
    const [cur, depth] = queue.shift();
    if (cur === target) return depth;

    for (let i = 0; i < words.length; i++) {
      const next = words[i];

      if (!visited.has(next) && diff1(cur, next)) {
        visited.add(next);
        queue.push([next, depth + 1]);
      }
    }
  }
}
