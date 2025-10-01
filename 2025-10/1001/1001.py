from itertools import permutations

def check(can, banned_id):
    for i in range(len(banned_id)):
        for i in range(len(banned_id)):
            if len(can[i]) != len(banned_id[i]):
                return False
            for j in range(len(can[i])):
                if can[i][j] != banned_id[i][j] and banned_id[i][j] != '*':
                    return False
    return True

def solution(user_id, banned_id):
    result = []
    candidate = list(permutations(user_id, len(banned_id)))
    
    for can in candidate:
        if not check(can, banned_id):
            continue
        else:
            can = set(can)
            if can not in result:
                result.append(can)

    return len(result)