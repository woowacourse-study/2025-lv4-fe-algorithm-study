function solution(name) {
    let verticalMoveSum = 0;
    let minHorizontalMove = name.length - 1;
    
    for(let i = 0; i < name.length; i++) {
        const curAscii = name.charCodeAt(i);
        const aAscii = "A".charCodeAt(0);
        verticalMoveSum += Math.min(curAscii - aAscii, 26 + aAscii - curAscii)
        
        let nextIndex = i + 1;
        
        while(nextIndex < name.length && name[nextIndex] === "A") nextIndex++;
        
        minHorizontalMove = Math.min(minHorizontalMove, 2 * i + (name.length - nextIndex), i + 2 * (name.length - nextIndex))
    }
    
    return verticalMoveSum + minHorizontalMove;
}