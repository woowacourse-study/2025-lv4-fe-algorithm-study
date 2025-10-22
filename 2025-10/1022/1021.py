from collections import deque

def bfs(sx, sy):
    ans = 0
    q = deque()
    q.append((sx, sy))
    visited[sx][sy] = True

    while q:
        cx, cy = q.popleft()

        for k in range(4):
            nx, ny = cx + dx[k], cy + dy[k]

            if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny] and arr[nx][ny] != 'X':
                if arr[nx][ny] == 'P':
                    ans += 1
                visited[nx][ny] = True
                q.append((nx, ny))

    return ans

N, M = map(int, input().split())
arr = [[''] * M for _ in range(N)]
visited = [[False] * M for _ in range(N)]

sx = sy = 0

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(N):
    arr[i] = list(input())

for i in range(N):
    if 'I' in arr[i]:
        sx = i
        sy = arr[i].index('I')
        break

res = bfs(sx, sy)
if res == 0:
    print('TT')
else:
    print(res)