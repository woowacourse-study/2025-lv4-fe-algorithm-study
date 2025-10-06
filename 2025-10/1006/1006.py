def solution(survey, choices):
    answer = ''
    result = { 'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0 }
    scores = {1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3}
    
    for i in range(len(choices)):
        if choices[i] < 5:
            result[survey[i][0]] += scores[choices[i]]
        else:
            result[survey[i][1]] += scores[choices[i]]

    com = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']]
    
    for c in com:
        if result[c[0]] == result[c[1]] or result[c[0]] > result[c[1]]:
            answer += c[0]
        else:
            answer += c[1]
    
    return answer