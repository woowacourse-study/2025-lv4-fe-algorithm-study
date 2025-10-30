function solution(numbers, target) {
  numbers.sort();
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  const mSum = (sum - target) / 2;

  // numbers에서 각 숫자들은 서로 다른 값일때 mSum 을 만드는 조합의 수.
  let count = 0;

  console.log(numbers);

  const dfs = (index, sum) => {
    if (index === numbers.length) {
      return;
    }

    sum += numbers[index];

    if (sum === mSum) {
      count++;
    }

    dfs(index + 1, sum);
    dfs(index + 1, sum - numbers[index]);
  };

  dfs(0, 0);

  return count;
}
