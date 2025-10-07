function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => ({ r, i }))
    .filter(({ i }) => attendance[i])
    .sort((a, b) => a.r - b.r)
    .slice(0, 3)
    .map((o) => o.i);

  return 10000 * a + 100 * b + c;
}
