def solution(new_id):
    res = ''
    new_res = ''
    
    # 1단계: 모든 대문자를 소문자로 치환
    for i in new_id:
        if 'A' <= i <= 'Z':
            new_res += i.lower()
        else:
            new_res += i
            
    res = new_res
    
    # 2단계: 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    new_res = ''
    for r in res:
        if 'a' <= r <= 'z' or r.isdigit() or r in ['-', '_', '.']:
            new_res += r
    res = new_res

    # 3단계: 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    new_res = ''
    cnt = 0
    for r in res:
        if r == '.':
            cnt += 1
            continue
        elif cnt > 0:
            cnt = 0
            new_res += '.'
            new_res += r
        else:
            cnt = 0
            new_res += r
    res = new_res
    
    # 4단계: 마침표(.)가 처음이나 끝에 위치한다면 제거
    if len(res) > 0:
        if res[0] == '.':
            res = res[1:]
        if res[-1] == '.':
            res[:-1]

    # 5단계: 빈 문자열이라면, new_id에 "a"를 대입
    if res == '':
        res = 'a'

    # 6단계: 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
    # 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
    if len(res) > 15:
        if res[14] == '.':
            res = res[:14]
        else:
            res = res[:15]

    # 7단계: 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙임
    if len(res) == 1:
        res += res[-1] * 2
    elif len(res) == 2:
        res += res[-1]

    return res