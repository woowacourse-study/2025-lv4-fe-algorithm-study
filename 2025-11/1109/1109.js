function solution(n, times) {
  var answer = 0;

  times.sort((a, b) => a - b);

  let low = 1;
  let high = times[times.length - 1] * n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let sum = times.reduce((acc, curr) => acc + Math.floor(mid / curr), 0);

    if (sum < n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;

  return answer;
}
