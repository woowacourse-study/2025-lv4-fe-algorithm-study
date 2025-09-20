function solution(n, s, a, b, fares) {
    let minResult = Number.POSITIVE_INFINITY;
    const graph = Array.from(Array(n), () => Array(n).fill(Infinity));
    
    for(let i = 0; i < n; i++) {
        graph[i][i] = 0;
    }
    
    for(const [u, v, w] of fares) {
        if(graph[u-1][v-1] > w) graph[u-1][v-1] = w;
        if(graph[v-1][u-1] > w) graph[v-1][u-1] = w;
    }
    
    for(let cur = 0; cur < n; cur++) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                graph[i][j] = Math.min(graph[i][j], graph[i] [cur] + graph[cur][j]);
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        const hapseung = graph[s-1][i];
        const aDistance = graph[i][a-1];
        const bDistance = graph[i][b-1];
        
        if(hapseung + aDistance + bDistance < minResult) minResult = hapseung + aDistance + bDistance;
    }
    
    return minResult;
}