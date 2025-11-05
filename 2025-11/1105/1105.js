function solution(begin, target, words) {
  let min = 0;
  function dfs(current, count, visited) {
    if (current === target) {
      min = min === 0 ? count : Math.min(min, count);
      return;
    }
    if (count >= words.length) {
      return;
    }
    for (let i = 0; i < words.length; i++) {
      if (visited[i]) continue;
      const newWord = checkOneDifferent(current, words[i]);
      if (newWord === "") continue;
      visited[i] = true;
      dfs(newWord, count + 1, visited);
      visited[i] = false;
    }
  }

  function checkOneDifferent(currentWord, targetWord) {
    let flag = 0;
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i] !== targetWord[i]) {
        flag++;
      }
      if (flag >= 2) return "";
    }
    return flag === 1 ? targetWord : "";
  }

  const visited = new Array(words.length).fill(false);
  dfs(begin, 0, visited);
  return min;
}
