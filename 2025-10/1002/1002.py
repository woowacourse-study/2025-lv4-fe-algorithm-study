bingo = []
answer = []

for i in range(5):
    bingo.append(list(map(int, input().split())))

for i in range(5):
    answer.append(list(map(int, input().split())))

for i in range(2):
    for j in range(5):
        num = answer[i][j]

        for k in range(5):
            if num in bingo[k]:
                x, y = k, bingo[k].index(num)
                bingo[x][y] = 0

for i in range(2, 5):
    for j in range(5):
        b = 0
        num = answer[i][j]

        for k in range(5):
            if num in bingo[k]:
                x, y = k, bingo[k].index(num)
                bingo[x][y] = 0

        # 빙고 개수 세기
        # 가로
        for l in range(5):
            if bingo[l].count(0) == 5:
                b += 1

        # 세로
        for l in range(5):
            if [r[l] for r in bingo].count(0) == 5:
                b += 1

        # 대각선
        if bingo[0][0] == bingo[1][1] == bingo[2][2] == bingo[3][3] == bingo[4][4] == 0:
            b += 1

        if bingo[0][4] == bingo[1][3] == bingo[2][2] == bingo[3][1] == bingo[4][0] == 0:
            b += 1

        if b >= 3:
            print(i * 5 + j + 1)
            exit(0)