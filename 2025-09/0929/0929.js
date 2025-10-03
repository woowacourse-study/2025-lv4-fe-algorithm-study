function solution(array, commands) {
  return commands.map((command) => {
    const [i, j, k] = command;
    const newArr = array.slice(i - 1, j).sort((a, b) => a - b);
    return newArr[k - 1];
  });
}
