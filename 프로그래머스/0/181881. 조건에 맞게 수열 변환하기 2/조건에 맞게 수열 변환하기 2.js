function solution(arr) {
    //56
    
    let cnt = 0;
    
    while(true){
        
        const arr_x = arr.map((item) => {
            if(item >= 50 && item % 2 === 0) return item/2;
            if(item < 50 && item % 2 === 1 ) return item*2+1;
            return item;
        });
        
        if(arr_x.length === arr.length && arr_x.every((item,idx) => item === arr[idx])){
            break;
        }
        
        arr = arr_x;
        cnt++;
        
        
    }
    
    return cnt;
    
}