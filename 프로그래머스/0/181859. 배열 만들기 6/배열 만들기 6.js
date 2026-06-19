function solution(arr) {
    
    let i = 0;
    
    const stk = [];
    
    while(i < arr.length){
        if(stk.length === 0){
            stk.push(arr[i]);
            i++;
            continue;
        }

         if(arr[i] === stk[stk.length-1]){
             stk.pop();
             i++;
             continue;
         }{
             stk.push(arr[i]);
             i++;
             continue;
         }
    }
    
    return stk.length === 0 ? [-1] : stk;
}