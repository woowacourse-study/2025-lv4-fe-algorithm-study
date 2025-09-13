n = int(input())
nums = sorted(list(map(int, input().split())))
x = int(input())

s = 0
e = n - 1
ans = 0

while s < e:
    res = nums[s] + nums[e]
    if res == x:
        s += 1
        e -= 1
        ans += 1
    elif res < x:
        s += 1
    else:
        e -= 1

print(ans)