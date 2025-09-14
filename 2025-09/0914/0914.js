function solution(n, build_frame) {
    let answer = [];
    
    const exists = (x, y, t) => answer.some(([ax, ay, at]) => ax === x && ay === y && at === t);
    
    const validPillar = (x, y) => {
        return (
            y === 0 ||
            exists(x, y - 1, 0) ||
            exists(x - 1, y, 1) ||
            exists(x, y, 1)
        )
    }
    
    const validBo = (x, y) => {
        return (
            exists(x, y - 1, 0) ||
            exists(x + 1, y - 1, 0) ||
            exists(x + 1, y, 1) && exists(x - 1, y, 1)
        )
    }
    
    const isConnect = () => {
        for(const [x, y, isBo] of answer) {
            if(isBo && !validBo(x, y)) return false;
            if(!isBo && !validPillar(x, y)) return false;
        }
        return true;
    }
    
    for(const [x, y, isBo, isAdd] of build_frame) {
        if(isAdd) {
            answer.push([x, y, isBo]);
            if(!isConnect()) {
                answer.pop();
            }
        } else {
            answer = answer.filter(([ax, ay, at]) => !(ax === x && ay === y && at === isBo));
            if(!isConnect()) {
                answer.push([x, y, isBo]);
            }
        }
    }
    
    answer.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]) || (a[2] - b[2]))
    return answer;
}