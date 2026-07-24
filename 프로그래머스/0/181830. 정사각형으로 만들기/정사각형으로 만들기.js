function solution(arr) {
    
    const row = arr.length;
    const column = arr[0].length;
    
    if(row < column){
        let n = column-row;
        for(let i=0; i<n; i++){
            arr.push(Array(column).fill(0));    
        }
        
    }else if(column < row){
        let n = row-column;
        
        for(let i=0; i<row; i++){
            for(let j=0; j<n; j++){
                arr[i].push(0);    
            }
        }
    }
    
    
    return arr;
}