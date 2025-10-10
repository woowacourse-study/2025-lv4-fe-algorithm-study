function solution(n, info) {
    let max = 0;
    let maxAnswer = Array(11).fill(0);
    
    const dfs = (point, used, pointDiff, arr) => {
        if(n < used) return;
        
        if(point > 10) {
            if(pointDiff > max) {
                arr[10] = n - used;
                max = pointDiff;
                maxAnswer = [...arr];
            }
            return;
        }
        
        const toWinPoint = info[10 - point] + 1;
        if(n > used) {
            arr[10 - point] = toWinPoint;
            dfs(point + 1, used + toWinPoint, pointDiff + point, arr);
            arr[10 - point] = 0;
        }
        
        dfs(point + 1, used, pointDiff - (info[10 - point] > 0 ? point : 0), arr);
    }
    
    dfs(0, 0, 0, maxAnswer);
    
    return max <= 0 ? [-1] : maxAnswer;
}