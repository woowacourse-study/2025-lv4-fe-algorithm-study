function solution(today, terms, privacies) {
    const termsMap = new Map();
    const answer = [];
    const todayDate = new Date(today);
    
    for(const term of terms) {
        const [type, due] = term.split(" ");
        termsMap.set(type, +due);
    }
    
    privacies.forEach((privacy, index) => {
        const [dateString, type] = privacy.split(" ");
        const date = new Date(dateString);
        date.setMonth(date.getMonth() + termsMap.get(type));
        if(date <= todayDate) answer.push(index + 1);
    })
        
    return answer;
}