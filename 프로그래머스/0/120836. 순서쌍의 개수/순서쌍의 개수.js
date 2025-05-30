function solution(n) {
    let cnt = 0;
    for(let i=1; i<=n; i++){
        n%i === 0 ? cnt++ : 0;        
    }
    return cnt;
}