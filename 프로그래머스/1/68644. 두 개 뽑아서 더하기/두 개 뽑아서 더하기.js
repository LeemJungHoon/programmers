function solution(numbers) {
    
    const result = [];
    
    const setNum = numbers.sort((a,b) => a-b);
    
    const numLen = setNum.length;
    
    for(let i=0; i<numLen; i++){
        for(let j=i+1; j<numLen; j++){
            result.push(setNum[i] + setNum[j]);
        }
    }
    
    return [...new Set(result)].sort((a,b) => a-b);
}