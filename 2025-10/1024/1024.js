function solution(triangle) {
  // 입력을 바꾸지 않기 위해 복사하고 뒤집음
  const rev = triangle.slice().reverse();

  // 누적값(acc)을 바닥 행으로 초기화
  let acc = rev[0];

  // 바닥 바로 위 행부터 차례로 처리
  for (let r = 1; r < rev.length; r++) {
    const row = rev[r];
    const tmp = [];
    for (let i = 0; i < row.length; i++) {
      tmp.push(row[i] + Math.max(acc[i], acc[i + 1]));
    }
    acc = tmp;
  }

  return acc[0];
}
