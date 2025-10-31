function solution(name) {
  let vMove = 0;
  let hMove = Infinity;

  name.split('').forEach((c, i) => {
    // vMove 계산
    if (c !== 'A') {
      const dif = c.charCodeAt(0) - 65;
      vMove += Math.min(dif, 26 - dif);
    }

    // hMove 계산
    if (name[i + 1] === 'A' || i === name.length - 1) {
      let ni = i + 1;
      while (true) {
        if (ni === name.length || name[ni] !== 'A') {
          break;
        }
        ni++;
      }
      const dif = Math.min(2 * i + (name.length - ni), (name.length - ni) * 2 + i);
      hMove = Math.min(hMove, dif);
    }
  });

  return vMove + hMove;
}
