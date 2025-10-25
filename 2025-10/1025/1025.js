function solution(operations) {
  // 각 연산 결과값 저장
  const queue = [];

  // operations 를 돌면서 계산
  operations.forEach((op) => {
    const [_o, _val] = op.split(' ');
    const [o, val] = [_o, Number(_val)];

    if (o === 'I') {
      queue.push(val);
    } else if (o === 'D') {
      if (queue.length === 0) return; // <-- 빈 큐면 무시

      if (val === 1) {
        //최댓값을 삭제
        const mx = Math.max(...queue);
        const idx = queue.findIndex((x) => x === mx);
        queue.splice(idx, 1);
      } else if (val === -1) {
        //최솟값을 삭제
        const mi = Math.min(...queue);
        const idx = queue.findIndex((x) => x === mi);
        queue.splice(idx, 1);
      }
    }
  });

  // 연산 천리후 큐를 계산하여 반환
  if (queue.length) {
    return [Math.max(...queue), Math.min(...queue)];
  } else {
    return [0, 0];
  }
}
