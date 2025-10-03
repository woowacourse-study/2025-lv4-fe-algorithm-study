def solution(friends, gifts):
    answer = []
    dic = {}
    score = {}
    
    for f in friends:
        score[f] = 0
    
    for gift in gifts:
        s, g = gift.split()
        
        if gift in dic.keys():
            dic[gift] += 1
        else:
            dic[gift] = 1
            
        score[s] += 1
        score[g] -= 1
        
    for i in range(len(friends)):
        g = 0
        for j in range(len(friends)):
            if i == j:
                continue
            if (friends[i] + ' ' + friends[j]) not in dic.keys():
                result1 = 0
            else:
                result1 = dic[friends[i] + ' ' + friends[j]]
            
            if (friends[j] + ' ' + friends[i]) not in dic.keys():
                result2 = 0
            else:
                result2 = dic[friends[j] + ' ' + friends[i]]
                
            if result1 > result2 or (result1 == result2 and score[friends[i]] > score[friends[j]]):
                g += 1
        answer.append(g)
    
    return max(answer)