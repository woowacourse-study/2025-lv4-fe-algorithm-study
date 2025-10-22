function solution(diffs, times, limit) {
    const calc = (level) => {
        let sum = 0;
        
        for(let i = 0; i < diffs.length; i++) {
            const diff = diffs[i];
            const time = times[i];

            if(diff <= level) sum += time;
            else {
                const prev = times[i-1] ?? 1;
                sum += (prev + time) * (diff - level) + time;
            }
        }
        return sum;
    }
    
    let left = 1;
    let right = 100_000;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sum = calc(mid);
        
        if(sum <= limit) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}