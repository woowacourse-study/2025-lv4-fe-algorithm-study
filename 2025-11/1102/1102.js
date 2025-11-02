function solution(array, commands) {
  var answer = [];

  for (let p = 0; p < commands.length; p++) {
    const [i, j, k] = commands[p];
    const newArr = array.slice(i - 1, j);
    newArr.sort((a, b) => a - b);
    answer.push(newArr[k - 1]);
  }
  return answer;
}
