from collections import deque

def bfs(x, y):
    q = deque()
    q.append((x, y))

    while q:
        cx, cy = q.popleft()

        if cx == r2 and cy == c2:
            return arr[cx][cy]
        
        for k in range(6):
            nx, ny = cx + dx[k], cy + dy[k]

            if 0 <= nx < N and 0 <= ny < N and arr[nx][ny] == 0:
                arr[nx][ny] = arr[cx][cy] + 1
                q.append((nx, ny))

    return -1

N = int(input())
r1, c1, r2, c2 = map(int, input().split())
arr = [[0] * N for _ in range(N)]

dx = [-2, -2, 0, 0, 2, 2]
dy = [-1, 1, -2, 2, -1, 1]

print(bfs(r1, c1))