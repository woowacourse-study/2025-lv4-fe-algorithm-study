function solution(today, terms, privacies) {
  var answer = [];

  const [tyear, tmonth, tday] = today.split('.').map(Number);
  function isDelete(year, month, day) {
    if (year < tyear) return true;
    if (year === tyear) {
      if (month < tmonth) return true;
      if (month === tmonth) {
        if (day < tday) return true;
      }
    }
    return false;
  }

  const termsMap = terms.map((term) => {
    return term.split(' ');
  });
  for (let i = 0; i < privacies.length; i++) {
    const [date, sort] = privacies[i].split(' ');
    const expiration = Number(termsMap.find((term) => term[0] === sort)[1]);
    let [year, month, day] = date.split('.').map(Number);

    const sum = month + expiration;

    if (sum > 12) {
      year += 1;
      if (day - 1 === 0) {
        month = sum - 12 - 1;
        day = 28;
      } else {
        month = sum - 12;
        day -= 1;
      }
    } else {
      if (day - 1 === 0) {
        month = sum - 1;
        day = 28;
      } else {
        month = sum;
        day -= 1;
      }
    }
    console.log(year, month, day);
    if (isDelete(year, month, day)) {
      answer.push(i + 1);
    }
  }

  return answer;
}
