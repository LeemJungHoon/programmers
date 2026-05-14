function solution(arr, queries) {
    queries.map((item,idx) => {        
        let s = item[0];
        let e = item[1];
        
        for(let i=s ; i<=e; i++){
            arr[i]++;
        }
        
        
    })
    
    return arr;
} 