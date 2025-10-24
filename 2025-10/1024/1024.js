function solution(land) {
    const N = land.length;
    const M = land[0].length;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    const oilSizes = [];
    const columnSets = [];

    const bfs = (x, y, id) => {
    const queue = [[x, y]];
    visited[x][y] = true;
    let size = 0;
    const columns = new Set();

    while (queue.length) {
        const [cx, cy] = queue.shift();
        size++;
        columns.add(cy);

        for (const [dx, dy] of dirs) {
        const nx = cx + dx;
        const ny = cy + dy;
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if (visited[nx][ny] || land[nx][ny] === 0) continue;

        visited[nx][ny] = true;
        queue.push([nx, ny]);
        }
    }

    oilSizes[id] = size;
    columnSets[id] = columns;
    };

    let id = 0;
    for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (!visited[i][j] && land[i][j] === 1) {
        bfs(i, j, id++);
        }
    }
    }

    const oilPerColumn = Array(M).fill(0);
    for (let k = 0; k < id; k++) {
    for (const c of columnSets[k]) {
        oilPerColumn[c] += oilSizes[k];
    }
    }

    return Math.max(...oilPerColumn);
}
