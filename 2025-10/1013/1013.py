from collections import deque

def bfs(i, j):
    q = deque()
    q.append((i, j))

    while q:
        cx, cy = q.popleft()
        visited[cx][cy] = True
        res = tree[cx][cy]

        if res == '-' and (cy + 1) < M and tree[cx][cy + 1] == '-':
            q.append((cx, cy + 1))
        elif res == '|' and (cx + 1) < N and tree[cx + 1][cy] == '|':
            q.append((cx + 1, cy))

N, M = map(int, input().split())
tree = [[''] * M for _ in range(N)]
visited = [[False] * M for _ in range(N)]
ans = 0

for i in range(N):
    tree[i] = list(input())

for i in range(N):
    for j in range(M):
        if not visited[i][j]:
            ans += 1
            bfs(i, j)

print(ans)