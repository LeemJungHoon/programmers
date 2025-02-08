function solution(numbers) {
    
    const arrNums = numbers.sort((a,b) => b-a);
    
    return arrNums[0] * arrNums[1];
    
}