function solution(coin, cards) {
  var answer = 0;

  const goal = cards.length + 1;
  let hand = cards.splice(0, cards.length / 3);
  let keep = [];
  let step = 0;

  while (cards.length) {
    const getCard = cards.splice(0, 2);
    keep.push(...getCard);

    const result = findPair(hand, goal);
    if (result) {
      step++;
      hand = result;
      continue;
    }

    if (coin >= 1) {
      const result = selectOne(keep, goal, hand);
      if (result) {
        const [target, next] = result;
        hand = hand.filter((card) => card !== target);
        keep = keep.filter((card) => card !== next);
        coin--;
        step++;
        continue;
      }
    }

    if (coin >= 2) {
      const result = findPair(keep, goal);
      if (result) {
        step++;
        coin -= 2;
        keep = result;
        continue;
      }
    }

    break;
  }

  return step + 1;
}

function selectOne(keep, goal, hand) {
  for (let next of keep) {
    let target = goal - next;
    const resultA = hand.find((card) => card === target);
    if (resultA !== undefined) {
      return [target, next];
    }
  }
  return null;
}

function findPair(cards, goal) {
  for (let i = 0; i < cards.length; i++) {
    const target = goal - cards[i];
    for (let j = i + 1; j < cards.length; j++) {
      if (cards[j] === target) {
        return cards.filter((card) => card !== cards[i] && card !== cards[j]);
      }
    }
  }
  return null;
}
