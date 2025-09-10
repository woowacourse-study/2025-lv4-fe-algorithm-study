function solution(p) {
    if(p === "") return "";
    
    const isCorrect = (str) => {
        const stack = [];
        str.split("").forEach((char) => {
            if(char === "(") {
                stack.push(char);
            } else {
                if (stack.length === 0) return false;
                stack.pop();
            }
        });
        
        return stack.length === 0;
    }

    const splitUV = (str) => {
        let count = 0;
        for(let i = 0; i < str.length; i++) {
            const char = str[i];
            if(char === "(") count++;
            else count--;
            
            if(count === 0) return {u: str.slice(0, i + 1), v: str.slice(i + 1)}
        };
        
        return {u: str, v: ""}
    }
    
    const parsingU = (str) => str.slice(1, -1).split("").map((char) => char === "(" ? ")" : "(").join("");
    
    const parsing = (str) => {
        if(str === "") return "";
        const { u, v } = splitUV(str);
        if(isCorrect(u)) {
            return u + parsing(v);
        } else {
            return "(" + parsing(v) + ")" + parsingU(u)
        }
    }
    
    const result = parsing(p);
    
    return result;
}