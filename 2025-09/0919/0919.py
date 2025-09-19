def solution(m, musicinfos):
    musics = {}
    find = []
    
    m = m.replace('C#', 'c').replace('D#', 'd').replace('F#', 'f').replace('G#', 'g').replace('A#', 'a').replace('E#', 'e').replace('B#', 'b')
    for music in musicinfos:
        st, et, title, info = music.split(',')
        st_info = st.split(':')
        et_info = et.split(':')
        total_l = (int(et_info[0]) * 60 + int(et_info[1])) - (int(st_info[0]) * 60 + int(st_info[1]))
        info = info.replace('C#', 'c').replace('D#', 'd').replace('F#', 'f').replace('G#', 'g').replace('A#', 'a').replace('E#', 'e').replace('B#', 'b')
        
        res = ''
        max_len = len(info)
        
        i = 0
        while i < total_l:
            nxt = info[(i + max_len) % max_len]
            res += nxt
            i += 1
        musics[title] = res

    for k, v in musics.items():
        if m in v:
            find.append([k, len(v)])

    if len(find) == 0:
        return "(None)"
    if len(find) == 1:
        return find[0][0]
    else:
        sorted_find = sorted(find, key=lambda x: -x[1])
        return sorted_find[0][0]