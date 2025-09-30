from itertools import combinations

def solution(nums):
    answer = 0

    lst = list(map(list, combinations(nums, 3)))
    
    for l in lst:
        s = sum(l)
        
        fail = 0
        for i in range(2, s // 2 + 1):
            if s % i == 0:
                fail = 1
                break
        if fail == 0:
            answer += 1

    return answer