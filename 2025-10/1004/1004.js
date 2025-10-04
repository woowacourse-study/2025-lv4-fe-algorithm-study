function solution(users, emoticons) {
  var answer = [0, 0];
  const array = [];
  const newArray = [];
  const sale = [10, 20, 30, 40];

  // 가능한 조합 찾기
  function dfs() {
    if (newArray.length === emoticons.length) {
      // console.log(newArray)
      array.push([...newArray]);
      return;
    }
    for (let i = 0; i < 4; i++) {
      newArray.push(sale[i]);
      dfs();
      newArray.pop();
    }
  }
  dfs();

  for (let i = 0; i < array.length; i++) {
    let emoticonPlus = 0;
    let totalPrice = 0;
    for (let j = 0; j < users.length; j++) {
      let price = 0;
      for (let k = 0; k < array[i].length; k++) {
        // 구매할 경우
        if (users[j][0] <= array[i][k]) {
          price += emoticons[k] - emoticons[k] * (array[i][k] / 100);
        }
      }
      if (price >= users[j][1]) {
        emoticonPlus += 1;
        continue;
      }
      totalPrice += price;
    }
    if (
      emoticonPlus > answer[0] ||
      (emoticonPlus === answer[0] && totalPrice > answer[1])
    ) {
      answer = [emoticonPlus, totalPrice];
    }

    // console.log(emoticonPlus,totalPrice)
  }

  function calcSell() {}

  return answer;
}
