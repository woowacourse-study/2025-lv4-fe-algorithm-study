function solution(new_id) {
    let resultId = new_id.toLowerCase().split("");
    resultId = resultId.filter((lowerId) => {
        if("a" <= lowerId && lowerId <= "z") return true;
        if("0" <= lowerId && lowerId <= "9") return true;
        if(lowerId === "-") return true;
        if(lowerId === "_") return true;
        if(lowerId === ".") return true;
        
        return false;
    }).join("");
    let newId = "";
    for(const char of resultId) {
        if(char === "." && newId.endsWith(".")) {
            continue;
        }
        newId += char;
    }
    resultId = newId
    if(resultId.startsWith(".")) resultId = resultId.slice(1)
    if(resultId.endsWith(".")) resultId = resultId.slice(0, -1);
    if(resultId === "") resultId = "a";
    resultId = resultId.slice(0, 15);
    if(resultId.endsWith(".")) resultId = resultId.slice(0, -1);
    

    return resultId.padEnd(3, resultId[resultId.length - 1]);
}