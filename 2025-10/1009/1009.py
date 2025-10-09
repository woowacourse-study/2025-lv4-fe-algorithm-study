L = int(input())
N = int(input())

cake = [0] * L
expectMaxL = 0
expectNum = 0
realMaxL = 0
realNum = 0

for n in range(N):
    P, K = map(int, input().split())
    if (K - P + 1) > expectMaxL:
        expectMaxL = K - P + 1
        expectNum = n + 1

    cnt = 0
    for i in range(P - 1, K):
        if cake[i] == 0:
            cnt += 1
            cake[i] = n + 1
    if cnt > realMaxL:
        realMaxL = cnt
        realNum = n + 1

print(expectNum)
print(realNum)