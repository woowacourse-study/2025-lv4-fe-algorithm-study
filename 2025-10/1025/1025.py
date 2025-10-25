from collections import deque

def bfs():
    q = deque()
    q.append(0)
    visited[0] = True

    while q:
        c = q.popleft()
        res = A[c]

        for i in range(1, res + 1):
            idx = c + i
            if idx < N and not visited[idx]:
                result[idx] = result[c] + 1
                visited[idx] = True
                q.append(idx)

N = int(input())
A = list(map(int, input().split()))
result = [0] * N
visited = [False] * N

bfs()

if result[N - 1] == 0 and N > 1:
    print(-1)
else:
    print(result[N - 1])