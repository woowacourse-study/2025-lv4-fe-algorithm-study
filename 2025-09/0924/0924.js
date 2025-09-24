const timeToSeconds = (time) => {
    [hour, minute, second] = time.split(":");
    return Number(hour) * 60 * 60 + Number(minute) * 60 + Number(second);
}

const secondsToTime = (seconds) => {
    const second = (seconds % 60).toString().padStart(2, "0");
    const minutes = Math.floor(seconds / 60);
    const minute = (minutes % 60).toString().padStart(2, "0");
    const hour = (Math.floor(minutes / 60)).toString().padStart(2, "0");
    return [hour, minute, second].join(":");
}

function solution(play_time, adv_time, logs) {
    const playSeconds = timeToSeconds(play_time);
    const advSeconds = timeToSeconds(adv_time);

    // 차분 배열
    const timeline = new Array(playSeconds + 2).fill(0);

    for (const log of logs) {
        const [s, e] = log.split("-").map(timeToSeconds);
        timeline[s] += 1;
        timeline[e] -= 1;
    }

    // 동시 시청자 수
    for (let i = 1; i <= playSeconds; i++) {
        timeline[i] += timeline[i - 1];
    }

    // 누적 시청 시간
    const prefix = new Array(playSeconds + 2).fill(0);
    for (let i = 1; i <= playSeconds; i++) {
        prefix[i] = prefix[i - 1] + timeline[i - 1];
    }

    // 광고 구간 최댓값 탐색
    let maxSum = prefix[advSeconds];
    let bestStart = 0;

    for (let start = 1; start + advSeconds <= playSeconds; start++) {
        const end = start + advSeconds;
        const total = prefix[end] - prefix[start];
        if (total > maxSum) {
        maxSum = total;
        bestStart = start;
        }
    }

    return secondsToTime(bestStart);
}