function solution(users, emoticons) {
    const DISCOUNTS = [10, 20, 30, 40];
    let maxAnswer = [0, 0];
    
    const permutation = (nums) => {
        const result = [];
        
        const helper = (items)=> {
            if(items.length === nums) {
                result.push(items);
                return;
            }
            
            DISCOUNTS.forEach((discount) => {
                helper([...items, discount])
            });
        }
        
        helper([]);
        return result;
    }
    
    const discounts = permutation(emoticons.length);
    for(let i = 0; i < discounts.length; i++) {
        let max = [0, 0];
        const discount = discounts[i];
        for(const [비율, 가격] of users) {
            let sum = 0;
            for(let j = 0; j < emoticons.length; j++) {
                const eachDiscount = discount[j];
                const emoticon = emoticons[j];
                if(eachDiscount < 비율) continue;
                sum += emoticon * (100 - eachDiscount) / 100
            }
            if(sum >= 가격) max[0] += 1;
            else max[1] += sum;
        }
        if(max[0] > maxAnswer[0]) maxAnswer = max;
        else if (max[0] === maxAnswer[0] && max[1] > maxAnswer[1]) maxAnswer = max;
    }
    
    
    return maxAnswer;
}