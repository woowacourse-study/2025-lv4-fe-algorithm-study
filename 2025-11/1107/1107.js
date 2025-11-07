function solution(a, b) {
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let days = b - 1;
  for (let i = 0; i < a - 1; i++) {
    days += month[i];
  }

  return week[(days + 5) % 7];
}
