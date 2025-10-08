function solution(dice) {
  let dices = [];
  let maxDiceCount = 0;
  let result = {};

  maxDiceCount = dice.length / 2;
  dices = [...dice];

  function recursiveDice(arrNumber, count, sum, flag) {
    if (arrNumber > dices.length) return;
    if (count === maxDiceCount) {
      if (!result[flag]) result[flag] = [sum];
      else result[flag].push(sum);
      return;
    }

    for (let i = arrNumber; i < dices.length; i++) {
      for (let j = 0; j < 6; j++) {
        const accSum = sum + dices[i][j];
        const accFlag = flag + i + ",";
        recursiveDice(i + 1, count + 1, accSum, accFlag);
      }
    }
  }

  recursiveDice(0, 0, 0, "");
  const res = Object.entries(result);
  let maxWin = 0;
  let windDice = "";

  for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res.length; j++) {
      const setA = new Set(res[i][0].split(",").filter(Boolean));
      const setB = new Set(res[j][0].split(",").filter(Boolean));
      const overlap = [...setA].some((x) => setB.has(x));
      if (overlap) continue;

      const firstArray = res[i][1].sort((a, b) => a - b);
      const secondArray = res[j][1].sort((a, b) => a - b);

      let accCountA = 0,
        accCountB = 0;

      for (const number of firstArray) {
        accCountA += findIdx(secondArray, number);
      }
      for (const number of secondArray) {
        accCountB += findIdx(firstArray, number);
      }

      if (accCountA > accCountB && accCountA > maxWin) {
        maxWin = accCountA;
        windDice = res[i][0];
      } else if (accCountB > accCountA && accCountB > maxWin) {
        maxWin = accCountB;
        windDice = res[j][0];
      }
    }
  }

  return windDice
    .split(",")
    .filter(Boolean)
    .map((num) => Number(num) + 1);
}

function findIdx(array, target) {
  let start = 0,
    end = array.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (array[mid] < target) start = mid + 1;
    else end = mid;
  }
  return start;
}
