function solution(arr, idx) {
    
    let result = [];
    
    arr.forEach((item,arrIdx) => {
        if(arrIdx >= idx){
            item ? result.push(arrIdx) : 0;
        }
    })
    
    return result.length > 0 ? result[0] : -1;
}