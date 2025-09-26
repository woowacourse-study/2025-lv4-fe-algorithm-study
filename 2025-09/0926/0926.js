function solution(people, limit) {
    let count = 0;
    let left = 0;
    let right = people.length - 1;
    const sortedPeople = people.sort((a, b) => b - a);
    
    while(left <= right) {
        const heaviest = sortedPeople[left];
        const lightest = sortedPeople[right];
        if(heaviest + lightest > limit) {
            left++;
        } else {
            left++;
            right--;
        }
        count++;
    }
    
    return count;
}