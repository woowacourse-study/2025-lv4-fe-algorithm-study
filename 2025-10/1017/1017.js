function solution(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  const result = [];
  let next = 0;

  while (i >= 0 || j >= 0 || next) {
    let na = 0;
    let nb = 0;
    if (i >= 0) {
      na = Number(a[i]);
      i--;
    }
    if (j >= 0) {
      nb = Number(b[j]);
      j--;
    }
    const sum = na + nb + next;
    result.push(sum % 10);
    next = Math.floor(sum / 10);
  }

  if (next) result.push(next);

  return result.reverse().join('');
}
