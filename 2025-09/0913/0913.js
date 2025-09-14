function solution(strArr) {
  let strGroup = new Map();
  strArr.forEach((str, idx) => {
    const key = str.length;
    if (strGroup.has(key)) {
      strGroup.set(key, strGroup.get(key) + 1);
    } else {
      strGroup.set(key, 1);
    }
  });
  return Math.max(...strGroup.values());
}
