function minimumLoss(price) {
  let sortArr = price.map((a, idx) => [a, idx]).sort((a, b) => a[0] - b[0]);
  let minloss = Infinity;
  for (let i = 0; i < price.length; i++) {
    const [value, idx] = sortArr[i];
    for (let j = 0; j < price.length; j++) {
      if (i - j >= 0 && idx < sortArr[i - j][1]) {
        minloss = Math.min(minloss, value - sortArr[i - j][0]);
        break;
      }
    }
  }
  return minloss;
}
