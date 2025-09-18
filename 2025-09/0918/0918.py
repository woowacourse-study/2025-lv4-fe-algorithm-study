def solution(msg):
    answer = []
    dic = {}
    
    s = 'A'
    for i in range(0, 26):
        dic[chr(ord(s) + i)] = i + 1
    
    while msg:
        find_len = 1
        while find_len <= len(msg):
            find_str = msg[:find_len]
            if find_str not in dic:
                find_len -= 1
                break
            find_len += 1
            
        s = msg[:find_len]
        answer.append(dic[s])
        msg = msg[find_len:]
        
        if msg:
            dic[s + msg[0]] = len(dic) + 1
            
    return answer