function solution(cap, n, deliveries, pickups) {
    let distance = 0;
    
    const delZero = (arr) => {
        for(let i = arr.length - 1; i >= 0; i--) {
            if(arr[i] === 0) arr.pop();
            else return;
        }
    }
    
    const delItem = (arr) => {
        let remain = cap;
        for(let i = arr.length - 1; i >= 0; i--) {
            if(arr[i] >= remain) {
                arr[i] -= remain;
                break;
            } else {
                remain -= arr[i];
                arr[i] = 0;
            }
        }
    }
    
    while(deliveries.length || pickups.length) {
        delZero(deliveries);
        delZero(pickups);
        if(!deliveries.length && !pickups.length) break;
        const farDistance = Math.max(deliveries.length, pickups.length);
        distance += 2 * farDistance;
        delItem(deliveries);
        delItem(pickups);
    }
    
    return distance;
}