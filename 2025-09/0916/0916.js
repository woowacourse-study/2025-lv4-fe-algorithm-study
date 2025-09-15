function solution(key, lock) {
    const M = key.length;
    const N = lock.length;

    const rotate = (key) => {
        return key.reduce((acc, row) => row.map((cell, index) => [cell, ...acc[index] || []]), []);
    }

    const check = (board, M, N) => {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
        if (board[M - 1 + i][M - 1 + j] !== 1) return false;
        }
    }
    return true;
    };

    const boardSize = N + 2 * (M - 1);
    let board = Array.from({ length: boardSize }, () => Array(boardSize).fill(0));
    for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        board[M - 1 + i][M - 1 + j] = lock[i][j];
    }
    }

    for (let r = 0; r < 4; r++) {
    key = rotate(key);

    for (let x = 0; x <= boardSize - M; x++) {
        for (let y = 0; y <= boardSize - M; y++) {
        let newBoard = board.map((row) => [...row]);

        for (let i = 0; i < M; i++) {
            for (let j = 0; j < M; j++) {
            newBoard[x + i][y + j] += key[i][j];
            }
        }

        if (check(newBoard, M, N)) return true;
        }
    }
    }

    return false;
}
