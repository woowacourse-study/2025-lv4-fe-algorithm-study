function solution(orders, course) {
    const maxCount = Math.max(...orders.map((order) => order.length));
    const maxNumber = Array(maxCount+1).fill(0);
    
    const result = [];
    
    for(const num of course) {
        const map = {};
        for(const order of orders) {
            combination(order.split(""), num).forEach((comb) => {
                map[comb] = map[comb] + 1 || 1;
                if(map[comb] > maxNumber[num]) maxNumber[num] = map[comb]
            })
        }
        
        
        
        for(const key in map) {
            if(map[key] === maxNumber[num] && maxNumber[num] > 1) result.push(key);
        }
    }
    
    return result.sort((a, b) => a < b ? -1 : 1);
}


const combination = (list, count) => {
    const result = [];
    
    const helper = (arr, rest) => {
        if(arr.length === count) {
            result.push(arr.sort((a, b) => a > b ? 1 : -1).join(""));
            return;
        }
        
        rest.forEach((char, index) => {
            const newRest = rest.slice(index + 1);
            helper([...arr, char], newRest);
        })
    }
    
    helper([], list);
    
    return result;
}
