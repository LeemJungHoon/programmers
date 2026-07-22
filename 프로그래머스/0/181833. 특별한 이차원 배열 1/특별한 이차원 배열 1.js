function solution(n) {
    
    const resultArr = [];
    
    for(let i=0; i<n; i++){
        const arr = [];
        for(let j=0; j<n; j++){
            i === j ? arr.push(1) : arr.push(0);
        }
        resultArr.push(arr);
    }
    
    return resultArr;
}