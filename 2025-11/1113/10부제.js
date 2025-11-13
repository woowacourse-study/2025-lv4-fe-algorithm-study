const fs = require('fs');
const stdin = fs.readFileSync('input.txt').toString().trim().split('\n');

// 자동차 번호의 일의 자리 숫자와 날짜의 일의자리 숫자가 일치하면 운행 x
// 자동차 번호의 일의 자리 숫자가 7 => 7, 17, 27 운행 x
// 자동차 번호의 일의 자리 숫자가 0 => 10, 20, 30 운행 x

function solution() {
  const [day, cars] = stdin;
  // console.log(day);
  // car에서 반복돌면서 일의 자리가 day와 일치하는 갯수 뽑자.

  const dayNum = Number(day);
  const carNumber = cars.split(' ').map((car) => Number(car));

  const answer = carNumber.filter((car) => car % 10 === dayNum).length;
  console.log(answer);
}
solution();
