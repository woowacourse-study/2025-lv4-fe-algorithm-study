function solution(m, n, puddles) {
  const MOD = 1_000_000_007;
  const dp = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  puddles.forEach((pud) => {
    const [x, y] = pud;
    dp[y - 1][x - 1] = -1;
  });

  if (dp[0][0] === -1 || dp[n - 1][m - 1] === -1) return 0;

  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[j][i] === -1) continue;
      if (j > 0 && dp[j - 1][i] !== -1) dp[j][i] += dp[j - 1][i];
      if (i > 0 && dp[j][i - 1] !== -1) dp[j][i] += dp[j][i - 1];
      dp[j][i] %= MOD;
    }
  }

  return dp[n - 1][m - 1];
}
