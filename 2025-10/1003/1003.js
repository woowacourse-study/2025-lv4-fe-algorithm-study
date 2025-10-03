function solution(survey, choices) {
    const MBTI_PAIRS = ["RT", "CF", "JM", "AN"];
    const countMap = {};
    
    for(let i = 0; i < survey.length; i++) {
        const [disagree, agree] = survey[i];
        const score = choices[i] - 4;
        
        if(score > 0) {
            countMap[agree] = (countMap[agree] ?? 0) + score;
        } else {
            countMap[disagree] = (countMap[disagree] ?? 0) + Math.abs(score);
        }
    }

    const finalMBTI = MBTI_PAIRS.map(([a, b]) => (countMap[a] ?? 0) >= (countMap[b] ?? 0) ? a : b);
    
    return finalMBTI.join("");
}