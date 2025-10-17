from collections import deque

def bfs(sx, sy):
    q = deque()
    q.append((sx, sy))
    visited[sx][sy] = True

    while q:
        cx, cy = q.popleft()

        for k in range(4):
            nx, ny = cx + dx[k], cy + dy[k]

            if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny] and A[nx][ny] != 1:
                if A[nx][ny] == 0:
                    distance[nx][ny] = distance[cx][cy] + 1
                    visited[nx][ny] = True
                    q.append((nx, ny))
                elif A[nx][ny] != 2: # 3, 4, 5 중 하나
                    return distance[cx][cy] + 1
    return False

n, m = map(int, input().split())
A = [[] * m for _ in range(n)]
distance = [[0] * m for _ in range(n)]
visited = [[False] * m for _ in range(n)]
sx = sy = 0

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(n):
    A[i] = list(map(int, input()))

for i in range(n):
    if 2 in A[i]:
        sx = i
        sy = A[i].index(2)

result = bfs(sx, sy)
if not result:
    print("NIE")
else:
    print("TAK")
    print(result)