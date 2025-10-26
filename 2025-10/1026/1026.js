function solution(points, routes) {
    let answer = 0;
    const n = routes.length;
    const robots = [];

    for (let i = 0; i < n; i++) {
    const start = points[routes[i][0] - 1];
    robots.push({ r: start[0], c: start[1], idx: 1 });
    }

    const startMap = new Map();
    for (const { r, c } of robots) {
    const key = `${r},${c}`;
    startMap.set(key, (startMap.get(key) || 0) + 1);
    }
    for (const [, count] of startMap) {
    if (count > 1) answer++;
    }

    while (true) {
    let doneCount = 0;
    const map = new Map();

    for (let i = 0; i < n; i++) {
        const robot = robots[i];
        const route = routes[i];

        if (robot.idx >= route.length) {
        doneCount++;
        continue;
        }

        const target = points[route[robot.idx] - 1];
        if (robot.r !== target[0]) {
        robot.r += robot.r < target[0] ? 1 : -1;
        } else if (robot.c !== target[1]) {
        robot.c += robot.c < target[1] ? 1 : -1;
        }

        if (robot.r === target[0] && robot.c === target[1]) robot.idx++;

        const key = `${robot.r},${robot.c}`;
        map.set(key, (map.get(key) || 0) + 1);
    }

    if (doneCount === n) break;

    for (const [, count] of map) {
        if (count > 1) answer++;
    }
    }

    return answer;
}
