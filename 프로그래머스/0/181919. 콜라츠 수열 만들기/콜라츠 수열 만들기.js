function solution(n) {
    
    let resultArr = [n];
    
    while(n > 1){
        n % 2 === 0 ? n = n/2 : n = 3*n+1;
        resultArr.push(n);
    }
    
    return resultArr;
}