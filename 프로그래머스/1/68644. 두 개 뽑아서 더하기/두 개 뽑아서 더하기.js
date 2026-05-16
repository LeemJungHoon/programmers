function solution(numbers) {
    let sortNumbers = numbers.sort((a,b) => a-b);
    let nLth = numbers.length;
    let result = [];
    
    
    for(let i=0; i<nLth; i++){
        for(let j=nLth-1; j>i; j--){
            result.push(sortNumbers[i] + sortNumbers[j]);    
        }
    }
    
    return [...new Set(result)].sort((a,b) => a-b);

}