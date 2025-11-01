let answer = 0;

function solution(numbers, target) {
  recursive(numbers, target);
  return answer;
}

function recursive(numbers, target, round = 0, total = 0) {
  if (round === numbers.length) {
    if (total === target) {
      answer += 1;
    }
    return;
  }
  [total - numbers[round], total + numbers[round]].forEach((total) => {
    recursive(numbers, target, round + 1, total);
  });
}
