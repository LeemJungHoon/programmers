function solution(arr) {
    let stk = [];
    let i = 0;
    
    while(i < arr.length){
        if(stk.length === 0 || (stk.length > 0 && stk.slice(-1)[0] < arr[i]) ){
            stk.push(arr[i]);
            i++;
            
        }else{
            stk.pop();   
        }
    }
    
    return stk;
}