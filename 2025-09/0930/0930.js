function solution(friends, gifts) {
  var answer = 0;
  const map = new Array(friends.length)
    .fill(0)
    .map((_) => new Array(friends.length).fill(0));
  // 0: 준 선물, 1: 받은 선물, 2: 선물 지수
  const giftStatus = new Array(friends.length)
    .fill(0)
    .map((_) => new Array(3).fill(0));
  const congGift = new Array(friends.length).fill(0);

  for (let i = 0; i < gifts.length; i++) {
    const [a, b] = gifts[i].split(' ');
    // 주는 사람
    const from = friends.indexOf(a);
    // 받는 사람
    const to = friends.indexOf(b);

    map[from][to]++;
    giftStatus[from][0]++;
    giftStatus[to][1]++;
  }

  giftStatus.map((gift) => {
    gift[2] = gift[0] - gift[1];
  });

  for (let i = 0; i < friends.length - 1; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      if ((map[i][j] === 0 && map[j][i] === 0) || map[i][j] === map[j][i]) {
        const iGiftStatus = giftStatus[i][2];
        const jGiftStatus = giftStatus[j][2];

        if (iGiftStatus > jGiftStatus) congGift[i]++;
        else if (iGiftStatus < jGiftStatus) congGift[j]++;

        continue;
      }
      if (map[i][j] > map[j][i]) congGift[i]++;
      else congGift[j]++;
    }
  }

  answer = Math.max(...congGift);

  return answer;
}
