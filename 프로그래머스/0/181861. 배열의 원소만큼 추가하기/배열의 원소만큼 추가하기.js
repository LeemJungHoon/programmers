function solution(arr) {
    
    const arrResult = [];
    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i]; j++){
            arrResult.push(arr[i])
        }
    }
    
    return arrResult;
}