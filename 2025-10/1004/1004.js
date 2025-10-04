function solution(id_list, report, k) {
    const filteredReport = Array.from(new Set(report)).map(one => one.split(" "));
    
    const map = new Map();
    
    for (const [from, to] of filteredReport) {
        map.set(to, map.get(to)+1 || 1);
    }
    
    const good = new Map();
    
    for (const [from, to] of filteredReport) {
        if(map.get(to) >= k) {
            good.set(from, good.get(from) + 1 || 1);
        }
    }
    
    const answer = id_list.map((id) => good.get(id) || 0);
    
    return answer;
}