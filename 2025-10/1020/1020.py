from collections import deque

def bfs():
    q = deque()
    for s in shark:
        sx, sy = s[0], s[1]
        q.append((sx, sy))
        visited[sx][sy] = True

    while q:
        cx, cy = q.popleft()

        for k in range(8):
            nx, ny = cx + dx[k], cy + dy[k]

            if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny]:
                if arr[nx][ny] == 0:
                    arr[nx][ny] = arr[cx][cy] + 1
                else:
                    arr[nx][ny] = min(arr[nx][ny], arr[cx][cy] + 1)
                visited[nx][ny] = True
                q.append((nx, ny))


N, M = map(int, input().split())
arr = [[0] * M for _ in range(N)]
visited = [[False] * M for _ in range(N)]
shark = []
ans = 0

dx = [-1, 1, 0, 0, -1, -1, 1, 1]
dy = [0, 0, -1, 1, 1, -1, 1, -1]

for i in range(N):
    arr[i] = list(map(int, input().split()))

for i in range(N):
    for j in range(M):
        if arr[i][j] == 1:
            shark.append([i, j])

bfs()

for i in range(N):
    ans = max(ans, max(arr[i]))

print(ans - 1)