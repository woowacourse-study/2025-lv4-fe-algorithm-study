def dfs(i, j, s):
    if len(s) == 6:
        if s not in res:
            res.append(s)
        return
    
    for k in range(4):
        nx, ny = i + dx[k], j + dy[k]
        if 0 <= nx < 5 and 0 <= ny < 5:
            dfs(nx, ny, s + str(arr[nx][ny]))

arr = [[0] * 5 for _ in range(5)]
res = []

for i in range(5):
    arr[i] = list(map(int, input().split()))

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(5):
    for j in range(5):
        dfs(i, j, str(arr[i][j]))

print(len(res))