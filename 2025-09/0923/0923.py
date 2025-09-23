from itertools import permutations

def solution(k, dungeons):
    answer = -1
    idx = [i for i in range(len(dungeons))]
    
    orders = list(map(list,permutations(idx, len(dungeons))))
    
    for order in orders:
        K = k
        cnt = 0
        for o in order:
            if K >= dungeons[o][0]:
                cnt += 1
                K -= dungeons[o][1]
            else:
                answer = max(answer, cnt)
                break
        answer = max(answer, cnt)
        
    return answer

print(solution(80, [[80,20],[50,40],[30,10]]))