function solution(n) {
    let arr =[];
    for(let i=1; i<=n; i++){
        n%i === 0 ? arr.push(i) : 0;
    }
    
    return arr;
}