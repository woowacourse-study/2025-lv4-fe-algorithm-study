function solution(n) {
  let x = 0,
    y = 0;
  let count = n;
  let arr = Array.from({ length: n + 1 }, (_, idx) => new Array(idx + 1));
  let number = 1;
  let down = n % 3,
    side = (n - 1) % 3,
    up = (n - 2) % 3;
  while (count >= 0) {
    if (count % 3 === down) {
      for (let i = 0; i < count; i++) {
        x++;
        arr[x][y] = number++;
      }
    } else if (count % 3 === side) {
      for (let i = 0; i < count; i++) {
        y++;
        arr[x][y] = number++;
      }
    } else if (count % 3 === up) {
      for (let i = 0; i < count; i++) {
        x--;
        y--;
        arr[x][y] = number++;
      }
    }
    count--;
  }

  return arr.flat();
}
