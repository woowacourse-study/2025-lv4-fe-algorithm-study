function candies(n, arr) {
  let array = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (arr[i - 1] < arr[i]) {
      array[i] = array[i - 1] + 1;
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      array[i] = Math.max(array[i], array[i + 1] + 1);
    }
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += array[i];
  }
  return sum;
}
