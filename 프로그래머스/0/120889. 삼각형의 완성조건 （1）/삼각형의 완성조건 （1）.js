function solution(sides) {
    
    const arr = sides.sort().reverse();
    
    return arr[0] < (arr[1] + arr[2]) ? 1 : 2;
}