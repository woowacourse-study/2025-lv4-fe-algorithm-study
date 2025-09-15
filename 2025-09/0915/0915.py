def solution(cacheSize, cities):
    answer = 0
    cache = []
    cities = [c.lower() for c in cities]
    
    if cacheSize == 0:
        return len(cities) * 5
    
    for c in cities:
        if c in cache:
            answer += 1
            idx = cache.index(c)
            cache.pop(idx)
            cache.append(c)
        else:
            answer += 5
            if len(cache) < cacheSize:
                cache.append(c)
            else:
                cache.pop(0)
                cache.append(c)
                
    return answer