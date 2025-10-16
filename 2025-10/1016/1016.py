def check(i ,j):
    global landmine
    cnt = 0
    for k in range(8):
        ni, nj = i + dx[k], j + dy[k]

        if 0 <= ni < n and 0 <= nj < n and landmine[ni][nj] == '*':
            cnt += 1

    return cnt

n = int(input())

landmine = [[] * n for _ in range(n)]
open = [[] * n for _ in range(n)]
result = [['.'] * n for _ in range(n)]

dx = [-1, 1, 0, 0, -1, -1, 1, 1]
dy = [0, 0, -1, 1, -1, 1, -1, 1]

bang = False

for i in range(n):
    landmine[i] = list(input())

for i in range(n):
    open[i] = list(input())

# 지뢰가 있는 칸이 열렸는지 검사
for i in range(n):
    for j in range(n):
        if landmine[i][j] == '*' and open[i][j] == 'x':
            bang = True
            break

for i in range(n):
    for j in range(n):
        if (landmine[i][j] == '*' and open[i][j] == '.' and bang) or (landmine[i][j] == '*' and open[i][j] == 'x'):
            result[i][j] = '*'
        elif open[i][j] == '.':
            result[i][j] = '.'
        else:
            result[i][j] = check(i, j)

for i in range(n):
    print(*result[i], sep='')