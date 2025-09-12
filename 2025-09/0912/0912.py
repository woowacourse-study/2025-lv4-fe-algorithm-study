N, K = map(int, input().split())
nums = list(map(int, input().split()))
res = []
res.append(sum(nums[:K]))

for i in range(N - K):
    res.append(res[i] - nums[i] + nums[i + K])

print(max(res))