function solution(arr) {
    
    let result = [];
    
    for(let i=1; i<=1024; i*=2){
        if(arr.length <= i){
            let cnt = i - arr.length;
            result = [...arr];
            
            while(cnt > 0){
                result.push(0);
                cnt--;
            }
            break;
        }
    }
    
    return result;
}