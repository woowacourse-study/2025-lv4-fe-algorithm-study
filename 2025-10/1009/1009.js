function solution(n, tops) {
  const MOD = 10007;
  let a = 1; // i=0에서 3번으로 채운 경우
  let b = tops[0] ? 3 : 2; // i=0에서 1/2/4번으로 채운 경우

  for (let i = 1; i < n; i++) {
    const prevA = a;
    const prevB = b;

    // 세로 마름모(두 칸짜리)를 놓으면 언제나 다음 칸에 빚 생김
    a = (prevA + prevB) % MOD;

    // 한 칸 안에서 끝내는 모양 수: top에 따라 2 또는 3
    if (tops[i] === 1) {
      b = (2 * prevA + 3 * prevB) % MOD;
    } else {
      b = (1 * prevA + 2 * prevB) % MOD;
    }
  }

  return (a + b) % MOD;
}
