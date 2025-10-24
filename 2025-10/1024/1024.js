function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);

  let left = 0,
    right = people.length - 1;
  while (left < right) {
    if (people[left] + people[right] <= limit) {
      answer++;
      left++;
      right--;
    } else {
      right--;
      answer++;
    }
  }
  if (left === right) answer++;

  return answer;
}
