function solution(arr) {
    
    const n = arr.length;
    
    let bTrue = true;
    
    
    for(let i=0; i < n; i++){
        for(let j=0; j< n; j++){
            arr[i][j] === arr[j][i] ? null : bTrue = false;
        }
    }
    
    return +bTrue
    
}