N = input()
N = N.replace('9', '6')
new_n = N
ans = 1

nums = [str(i) for i in range(9)]
nums.append('6')

while True:
    d = []
    
    for n in nums:
        if n in N:
            d.append(n)

    new_n = ''
    for n in N:
        if n not in d:
            new_n += n
        else:
            d.remove(n)
    N = new_n
    if not N:
        break
    ans += 1

print(ans)