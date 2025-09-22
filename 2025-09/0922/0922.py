from itertools import permutations

def solution(numbers):
    answer = 0
    nums = list(numbers)
    res_nums = []
    
    for i in range(1, len(numbers) + 1):
        res = list(map(list, permutations(nums, i)))
        for r in res:
            res_nums.append(int(''.join(r)))
            
    set_nums = set(res_nums)
    
    for n in set_nums:
        if n < 2:
            continue
        elif n < 4:
            answer += 1
            continue
        for i in range(2, n // 2 + 1):
            if n % i == 0:
                break
            if i == (n // 2):
                answer += 1
    
    return answer