const preprocess = (info) => {
    const map = {};

    for(const str of info) {
        const [lang, job, career, food, scoreStr] = str.split(" ");
        const score = Number(scoreStr);
        const conditions = [lang, job, career, food];

        const dfs = (index, path) => {
            if(index === 4) {
                const key = path.join("|");
                if(!map[key]) map[key] = [];
                map[key].push(score);
                return;
            }

            dfs(index + 1, [...path, conditions[index]]);
            dfs(index + 1, [...path, "-"]);
        }

        dfs(0, []);
    }

    for(const key in map) {
        map[key].sort((a, b) => a - b);
    }

    return map;
}

const lowerBound = (arr, target) => {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

function solution(info, query) {
    const answer = [];
    const map = preprocess(info);
    
    for(const str of query) {
        const [lang, job, career, food, scoreStr] = str.split(" ").filter((s) => s !== "and");
        const targetScore = Number(scoreStr);
        
        const key = [lang, job, career, food].join("|");
        const arr = map[key];
        if (!arr) {
            answer.push(0);
            continue;
        }
        
        const index = lowerBound(arr, targetScore);
        answer.push(arr.length - index)
    }
    
    return answer;
}