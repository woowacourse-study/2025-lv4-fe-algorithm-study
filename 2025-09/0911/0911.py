N, M = map(int, input().split())
nums = list(map(int, input().split()))

s = e = 0
ans = 0

while e < N:
    if sum(nums[s:e+1]) == M:
        ans += 1
        s += 1
    elif sum(nums[s:e+1]) < M:
        e += 1
    else:
        s += 1

print(ans)