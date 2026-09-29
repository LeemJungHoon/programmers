function solution(k, score) {
    let arr = [];
    
    return score.map((item,idx) => {
        arr.push(item);
        arr.sort((a,b) => b-a).splice(k);
        
        return Math.min(...arr);
    })
    
    return result;
}