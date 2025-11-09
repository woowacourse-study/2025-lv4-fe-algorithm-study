function solution(numbers) {
  const setArr = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      setArr.add(numbers[i] + numbers[j]);
    }
  }

  return Array.from(setArr).sort((a, b) => a - b);
}
