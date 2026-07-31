function solution(n) {
    
    let arr = [];
    let cnt = 10;
    while(n>1){
        
        for(let i=2; i<=n; i++){
            if(n%i === 0){
                arr.includes(i) ? null : arr.push(i);
                n /= i;
                break;
            }
        }
        console.log(arr,n);
    }
    
    return arr;
    
}