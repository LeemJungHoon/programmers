function solution(arr, k) {
    
    const result = [];
    
    arr.forEach((item,idx) => {
        result.includes(item)  ? null : result.push(item);
    })
    
    
    for(let i=result.slice(0,k).length; i<k; i++){
        result.push(-1);
    }
    
    return result.slice(0,k);
}