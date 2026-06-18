function solution(arr, flag) {
    const X = [];
    
    flag.forEach((item,idx) => {
        if(item){
            for(let i=0; i<arr[idx]*2; i++){
                X.push(arr[idx]);
            }
        }else{
            for(let i=0; i<arr[idx]; i++){
                X.pop();
            }
        }
    })
    
    return X;
}