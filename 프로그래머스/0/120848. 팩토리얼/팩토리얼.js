function solution(n) {

    let fact = 1;
    
    for(let i=1; ; i++){
        fact *= i;
        
        if(fact > n){
            return i -1;
        }
    }
    
}