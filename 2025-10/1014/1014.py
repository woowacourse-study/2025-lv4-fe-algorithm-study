from collections import deque

def bfs(i, j):
    q = deque()
    q.append((i, j))
    visited[i][j] = True

    while q:
        cx, cy = q.popleft()

        for k in range(4):
            nx, ny = cx + dx[k], cy + dy[k]

            if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny] and pixel[nx][ny] == 255:
                visited[nx][ny] = True
                q.append((nx, ny))

N, M = map(int, input().split())
pixel = [[] * M for _ in range(N)]
visited = [[False] * M for _ in range(N)]
ans = 0

for i in range(N):
    rgb = list(map(int, input().split()))
    for j in range(M):
        p = sum(rgb[j * 3:(j + 1) * 3]) / 3
        pixel[i].append(p)

T = int(input())

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(N):
     for j in range(M):
        if pixel[i][j] >= T:
            pixel[i][j] = 255
        else:
            pixel[i][j] = 0

for i in range(N):
     for j in range(M):
        if not visited[i][j] and pixel[i][j] == 255:
             bfs(i, j)
             ans += 1

print(ans)