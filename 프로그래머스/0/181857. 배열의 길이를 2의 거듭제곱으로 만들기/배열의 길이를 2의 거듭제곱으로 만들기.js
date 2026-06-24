function solution(arr) {
    
    for(let i=1; i<=1024; i*=2){
        if(arr.length <= i){
            let cnt = i - arr.length;
            
            while(cnt > 0){
                arr.push(0);
                cnt--;
            }
            break;
        }
    }
    
    return arr;
}