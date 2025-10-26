from collections import deque

def bfs(A):
    q = deque()
    q.append(A)

    while q:
        c = q.popleft()
        if c == K:
            return arr[K]
        res = [c + 1, c * 2]

        for r in res:
            if r <= 1000000 and arr[r] == 0:
                arr[r] = arr[c] + 1
                q.append(r)

A, K = map(int, input().split())
arr = [0 for _ in range(1000001)]

print(bfs(A))