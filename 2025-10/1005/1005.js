function solution(info, edges) {
    let max = 0;
    const edgeMap = new Map();
    
    edges.forEach(([from, to]) => {
        edgeMap.set(from, [...(edgeMap.get(from) ?? []), to])
    });
    
    const dfs = (sheep, wolf, availableNodes) => {
        if(sheep <= wolf) return;
        if(sheep > max) max = sheep;
        
        for(const nextNode of availableNodes) {
            const isSheep = info[nextNode] === 0;
            const nextAvailableNodes = availableNodes.filter(node => node !== nextNode).concat(edgeMap.get(nextNode) ?? []);
            if(isSheep) {
                dfs(sheep + 1, wolf, nextAvailableNodes);
            } else {
                dfs(sheep, wolf + 1, nextAvailableNodes);
            }
        }
    }
    
    dfs(1, 0, edgeMap.get(0));
    
    return max;
}