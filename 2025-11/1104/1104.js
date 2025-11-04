function solution(numbers) {
  var answer = 0;
  const set = new Set();
  const newArr = [];
  const isVisited = new Array(numbers.length).fill(false);
  dfs();
  function dfs() {
    if (newArr.length <= numbers.length) {
      const number = Number(newArr.join(''));

      if (set.size !== set.add(number).size) {
        if (isPrime(number)) answer++;
      }
    } else {
      return;
    }

    for (let i = 0; i < numbers.length; i++) {
      if (isVisited[i]) continue;
      newArr.push(numbers[i]);
      isVisited[i] = true;
      dfs();
      newArr.pop();
      isVisited[i] = false;
    }
  }

  function isPrime(num) {
    if (num === 0) return false;
    if (num === 1) return false;
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return answer;
}
