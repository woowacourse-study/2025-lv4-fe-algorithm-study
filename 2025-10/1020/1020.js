function solution(s) {
    const set = new Set();
    
    const changeToArray = (tuple) => JSON.parse(tuple.replace(/{/g, '[').replace(/}/g, ']'));
    
    const sortedArray = changeToArray(s).sort((a, b) => a.length - b.length);
    
    sortedArray.forEach((arr) => {
        arr.forEach((number) => {
            if(!set.has(number)) set.add(number);
        })
    })
    
    return Array.from(set);
}