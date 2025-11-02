function solution(progresses, speeds) {
  var answer = [];

  while (progresses.length > 0) {
    let deployNum = 0;

    while (progresses[0] >= 100) {
      deployNum++;
      progresses.shift();
      speeds.shift();
    }

    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    if (deployNum > 0) answer.push(deployNum);
  }
  return answer;
}
