function solution(brown, yellow) {
  var answer = [];
  for (let i = 1; i <= yellow; i++) {
    const h = i,
      w = yellow / i;
    const count = h * 2 + w * 2 + 4;
    if (count === brown) {
      answer.push(w + 2, h + 2);
      break;
    }
  }
  return answer;
}
