const toSec = (t) => {
  const [h, m, s] = t.split(':').map(Number);
  return h * 3600 + m * 60 + s;
};

const toTime = (x) => {
  const h = Math.floor(x / 3600);
  x %= 3600;
  const m = Math.floor(x / 60);
  const s = x % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
};

function solution(play_time, adv_time, logs) {
  const play = toSec(play_time);
  const adv = toSec(adv_time);

  // 광고 길이가 전체와 같거나 0이면 바로 00:00:00
  if (adv === 0 || adv >= play) return '00:00:00';

  // 1) 차분 배열
  const diff = new Array(play + 2).fill(0);
  for (const log of logs) {
    const [sStr, eStr] = log.split('-');
    const s = toSec(sStr);
    const e = toSec(eStr);
    diff[s] += 1;
    diff[e] -= 1; // 종료시각은 시청 제외
  }

  // 2) 1차 누적합 → 각 초의 시청자 수
  const viewers = new Array(play + 1).fill(0);
  viewers[0] = diff[0];
  for (let t = 1; t <= play; t++) {
    viewers[t] = viewers[t - 1] + diff[t];
  }

  // 3) 2차 누적합 → 0..t까지의 누적 시청자 시간
  const acc = new Array(play + 1).fill(0);
  acc[0] = viewers[0];
  for (let t = 1; t <= play; t++) {
    acc[t] = acc[t - 1] + viewers[t];
  }

  // 4) 길이 adv 구간의 합을 O(1)로 확인
  let bestStart = 0;
  let bestSum = acc[adv - 1]; // [0..adv-1]
  for (let s = 1; s + adv - 1 <= play; s++) {
    const e = s + adv - 1;
    const sum = acc[e] - acc[s - 1];
    if (sum > bestSum) {
      bestSum = sum;
      bestStart = s;
    }
  }

  return toTime(bestStart);
}
