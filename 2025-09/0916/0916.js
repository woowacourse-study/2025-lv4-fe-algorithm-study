// 2차원 배열 회전 함수
function rotate(key) {
  return key.map((row, i) => row.map((_, j) => key[key.length - j - 1][i]));
}

function check(board, offset, m, n) {
  // lock 영역만 모두 1인지 확인
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[offset + i][offset + j] !== 1) return false;
    }
  }
  return true;
}

function solution(key, lock) {
  const m = key.length;
  const n = lock.length;

  // board 늘리기
  const size = n + 2 * (m - 1);
  const board = Array.from({ length: size }, () => Array(size).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      board[m - 1 + i][m - 1 + j] = lock[i][j];
    }
  }

  // 4번 회전하며 체크
  for (let r = 0; r < 4; r++) {
    // 90도 회전
    key = rotate(key);

    for (let x = 0; x <= size - m; x++) {
      for (let y = 0; y <= size - m; y++) {
        let newBoard = board.map((row) => [...row]);
        // board 에 key 붙임
        for (let i = 0; i < m; i++) {
          for (let j = 0; j < m; j++) {
            newBoard[x + i][y + j] += key[i][j];
          }
        }

        // lock 영역 확인
        if (check(newBoard, m - 1, m, n)) return true;
      }
    }
  }
  return false;
}

console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
  ) === true,
);
