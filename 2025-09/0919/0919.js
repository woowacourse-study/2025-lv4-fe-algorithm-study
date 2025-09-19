function activityNotifications(expenditure, d) {
  const accArr = {};

  for (let i = 0; i < d; i++) {
    if (!accArr[expenditure[i]]) accArr[expenditure[i]] = 1;
    else accArr[expenditure[i]]++;
  }

  let result = 0;

  for (let i = 0; i + d < expenditure.length; i++) {
    let count = 0;
    let keys = Object.keys(accArr)
      .map(Number)
      .sort((a, b) => a - b);

    if (d % 2 !== 0) {
      for (const key of keys) {
        count += accArr[key];
        if (count >= Math.ceil(d / 2)) {
          expenditure[i + d] >= key * 2 && result++;
          break;
        }
      }
    } else {
      let prev = 0;
      for (const key of keys) {
        count += accArr[key];
        if (count === d / 2) prev = key;
        else if (count > d / 2) {
          prev === 0
            ? expenditure[i + d] >= key * 2 && result++
            : expenditure[i + d] >= prev + key && result++;
          break;
        }
      }
    }

    accArr[expenditure[i]] === 1
      ? delete accArr[expenditure[i]]
      : accArr[expenditure[i]]--;
    !accArr[expenditure[i + d]]
      ? (accArr[expenditure[i + d]] = 1)
      : accArr[expenditure[i + d]]++;
  }
  return result;
}
