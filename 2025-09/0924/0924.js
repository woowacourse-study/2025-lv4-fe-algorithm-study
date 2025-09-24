function solution(arr) {
  var stk = [];
  arr.map((n, i) => {
    if (stk[stk.length - 1] !== n) {
      stk.push(n);
    } else {
      stk.pop();
    }
  });
  return stk.length > 0 ? stk : [-1];
}
