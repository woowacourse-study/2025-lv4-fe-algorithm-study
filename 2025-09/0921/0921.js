function solution(progresses, speeds) {
  var answer = [];
  let max = 0;
  let count = 0;
  for (let i = 0; i < progresses.length; i++) {
    const day = Math.ceil((100 - progresses[i]) / speeds[i]);
    if (max >= day) count++;
    else {
      count !== 0 && answer.push(count);
      max = day;
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}
