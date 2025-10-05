function solution(n, tops) {
  const MOD = 10007;
  let dp = Array.from({ length: n }, () => [0, 0]);

  dp[0][0] = 1;
  dp[0][1] = tops[0] ? 3 : 2;

  for (let i = 1; i < n; i++) {
    if (tops[i] === 0) {
      dp[i][0] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
      dp[i][1] = (dp[i - 1][0] + 2 * dp[i - 1][1]) % MOD;
    } else {
      dp[i][0] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
      dp[i][1] = (2 * dp[i - 1][0] + 3 * dp[i - 1][1]) % MOD;
    }
  }

  return (dp[n - 1][0] + dp[n - 1][1]) % MOD;
}
