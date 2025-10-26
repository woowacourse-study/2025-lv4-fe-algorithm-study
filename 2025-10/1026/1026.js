let [n, number, operator] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = parseInt(n);
number = number.trim().split(' ').map(Number);
// 덧셈, 뺄셈, 곱셈, 나눗셈
operator = operator.trim().split(' ').map(Number);

const newArr = [];
let minCalc = Infinity;
let maxCalc = -Infinity;

function dfs() {
  if (newArr.length === n - 1) {
    const result = calc(newArr);
    minCalc = Math.min(result, minCalc);
    maxCalc = Math.max(result, maxCalc);

    return;
  }

  for (let i = 0; i < 4; i++) {
    if (operator[i] > 0) {
      newArr.push(i);
      operator[i] -= 1;
      dfs();
      newArr.pop();
      operator[i] += 1;
    }
  }
}

dfs();
console.log(maxCalc + '\n' + minCalc);
function calc(operatorArr) {
  let result = number[0];
  for (let i = 0; i < operatorArr.length; i++) {
    // 덧셈
    if (operatorArr[i] === 0) {
      result += number[i + 1];
      continue;
    }
    // 뺄셈
    if (operatorArr[i] === 1) {
      result -= number[i + 1];
      continue;
    }
    // 곱셈
    if (operatorArr[i] === 2) {
      result *= number[i + 1];
      continue;
    }
    // 나눗셈
    if (operatorArr[i] === 3) {
      if (result < 0 && number[i + 1] > 0) {
        result = -1 * parseInt(Math.abs(result) / number[i + 1]);
        continue;
      }
      result = parseInt(result / number[i + 1]);
      continue;
    }
  }
  return result;
}
