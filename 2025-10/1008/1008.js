function solution(board, skill) {
    const N = board.length;
    const M = board[0].length;
    
    const impactBoard = Array.from({length: N+1}, () => Array(M+1).fill(0));
    skill.forEach(([type, r1, c1, r2, c2, degree]) => {
        const delta = type === 1 ? -1 * degree : degree;
        impactBoard[r1][c1] += delta;
        impactBoard[r1][c2 + 1] -= delta;
        impactBoard[r2 + 1][c1] -= delta;
        impactBoard[r2 + 1][c2 + 1] += delta;
    });
    
    for (let i = 0; i <= N; i++) {
        for (let j = 0; j <= M; j++) {
            const top = i > 0 ? impactBoard[i - 1][j] : 0;
            const left = j > 0 ? impactBoard[i][j - 1] : 0;
            const diag = i > 0 && j > 0 ? impactBoard[i - 1][j - 1] : 0;

            impactBoard[i][j] += top + left - diag;
        }
    }
    let count = 0;
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            const durability = board[i][j]
            const damage = impactBoard[i][j];
            
            if(durability + damage > 0) count++;
        }
    }
    
    return count;
}