function solution(friends, gifts) {
  const friendsLength = friends.length;
  const giftCount = new Array(friendsLength)
    .fill(0)
    .map(() => new Array(friendsLength).fill(0));

  const giftScore = new Map();
  const nextMonth = Array(friendsLength).fill(0);

  friends.forEach((friend) => giftScore.set(friend, 0));

  for (gift of gifts) {
    const [from, to] = gift.split(' ');
    giftCount[friends.indexOf(from)][friends.indexOf(to)]++;

    giftScore.set(from, giftScore.get(from) + 1);
    giftScore.set(to, giftScore.get(to) - 1);
  }

  for (let i = 0; i < friendsLength; i++) {
    for (let j = i + 1; j < friendsLength; j++) {
      if (giftCount[i][j] > giftCount[j][i]) nextMonth[i]++;
      else if (giftCount[i][j] < giftCount[j][i]) nextMonth[j]++;
      else {
        if (giftScore.get(friends[i]) > giftScore.get(friends[j]))
          nextMonth[i]++;
        else if (giftScore.get(friends[i]) < giftScore.get(friends[j]))
          nextMonth[j]++;
      }
    }
  }

  return Math.max(...nextMonth);
}
