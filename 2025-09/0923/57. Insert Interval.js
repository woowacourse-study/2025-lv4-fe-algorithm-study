/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const [newLeft, newRight] = newInterval;

  for (let i = 0; i < intervals.length; i++) {
    const [left, right] = intervals[i];

    // 1️⃣ 겹치기 전 구간 → 그냥 넘기기
    if (right < newLeft) continue;

    // 2️⃣ 겹치기 이후 구간 → newInterval 삽입 후 리턴
    if (newRight < left) {
      intervals.splice(i, 0, newInterval);
      return intervals;
    }

    // 3️⃣ 겹치는 구간 → 병합 시작
    let min = Math.min(left, newLeft);
    let max = Math.max(right, newRight);

    let j = i + 1;
    // 🚨 배열 끝까지 가는 경우도 고려
    while (j < intervals.length && intervals[j][0] <= max) {
      max = Math.max(max, intervals[j][1]);
      j++;
    }

    // 겹친 구간들을 [min, max]로 대체
    intervals.splice(i, j - i, [min, max]);
    return intervals;
  }

  // 4️⃣ 모든 구간보다 뒤에 있을 경우 → push
  intervals.push(newInterval);
  return intervals;
};
