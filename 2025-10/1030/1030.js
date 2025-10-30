function solution(genres, plays) {
    const answer = [];
    const map1 = new Map();
    const map2 = new Map();
    
    for(let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        map1.set(genre, (map1.get(genre) ?? 0) + play);
        map2.set(genre, [...(map2.get(genre) ?? []), [i, play]]);
    }
    
    const sortedGenres = Array.from(map1).sort((a, b) => b[1] - a[1]).map((sumElement) => sumElement[0]);
    
    
    for(const genre of sortedGenres) {
        const playsByGenre = map2.get(genre).sort((a, b) => b[1] - a[1]);
        answer.push(...playsByGenre.slice(0, 2).map((playElement) => playElement[0]));
    }
    
    return answer;
}