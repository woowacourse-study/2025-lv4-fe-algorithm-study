function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function solution(info, query) {
  const db = new Map();

  // 1. 전처리
  for (const line of info) {
    const [lang, position, career, food, scoreStr] = line.split(' ');
    const score = Number(scoreStr);
    const attrs = [lang, position, career, food];

    for (let mask = 0; mask < 16; mask++) {
      const keyParts = [];
      for (let i = 0; i < 4; i++) {
        keyParts.push(mask & (1 << i) ? '-' : attrs[i]);
      }
      const key = keyParts.join('');
      if (!db.has(key)) db.set(key, []);
      db.get(key).push(score);
    }
  }

  // 2. 점수 배열 정렬
  for (const [k, arr] of db) {
    arr.sort((a, b) => a - b);
  }

  // 3. 쿼리 처리
  const answer = [];
  for (let q of query) {
    q = q.replace(/ and /g, ' ');
    const parts = q.split(' ');

    const key = parts[0] + parts[1] + parts[2] + parts[3];
    const minScore = Number(parts[4]);

    const arr = db.get(key);
    if (!arr) {
      answer.push(0);
      continue;
    }
    const idx = binarySearch(arr, minScore);
    answer.push(arr.length - idx);
  }
  return answer;
}
