from itertools import product

def solution(word):
    vowel = ['A', 'E', 'I', 'O', 'U']
    
    words = []
    for i in range(1, 6):
        res = [''.join(p) for p in product(vowel, repeat=i)]
        for r in res:
            if r not in words:
                words.append(r)
            
    sorted_words = sorted(set(words))
    
    return sorted_words.index(word) + 1