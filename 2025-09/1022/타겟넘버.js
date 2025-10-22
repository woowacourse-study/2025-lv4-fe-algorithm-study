function solution(numbers, target) {
  var answer = 0;

  function dfs(depth, sum, target, numbers) {
    if (depth === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }

    dfs(depth + 1, sum + numbers[depth], target, numbers);
    dfs(depth + 1, sum - numbers[depth], target, numbers);
  }

  dfs(0, 0, target, numbers);

  return answer;
}
