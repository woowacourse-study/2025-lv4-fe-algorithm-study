function solution(n) {
    if(n === 1) return 1;
    
    const arr = [1, 2];
    
    for(let i = 0; i < n - 2; i++) {
        const value = (arr[i] + arr[i + 1]) % 1234567
        arr.push(value);
    }
    
    return arr[arr.length - 1];
}