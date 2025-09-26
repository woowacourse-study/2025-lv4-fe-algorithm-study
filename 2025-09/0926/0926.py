N = int(input())
ans = 0

l = len(str(N))
for i in range(l - 1):
    ans += (9 * (10 ** i)) * (i + 1)
ans += ((N - (10 ** (l - 1))) + 1) * l

print(ans)