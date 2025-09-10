import sys

input = sys.stdin.readline
N, S = map(int, input().split())
nums = list(map(int, input().split()))

s = 0
e = 0
ans = float('inf')
current = 0

while True:
    if current >= S:
        ans = min(ans, e - s)
        current -= nums[s]
        s += 1
    elif e == N:
        break
    else:
        current += nums[e]
        e += 1

print(0 if ans == float('inf') else ans)