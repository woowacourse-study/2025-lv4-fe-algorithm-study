const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const [str1, str2] = input;

const dp = Array.from({ length: str1.length + 1 }, () =>
  Array.from({ length: str2.length + 1 }, () => "")
);

for (let i = 1; i < str1.length + 1; i++) {
  for (let j = 1; j < str2.length + 1; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + str2[j - 1];
    } else {
      if (dp[i][j - 1].length > dp[i - 1][j].length) {
        dp[i][j] = dp[i][j - 1];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
}

const LCS = dp[str1.length][str2.length];

if (LCS.length === 0) {
  console.log(0);
} else {
  console.log(LCS.length);
  console.log(LCS);
}
