function solution(n_str) {
    
    let strIdx = 0;
    
    for(let i=0; i<n_str.length; i++){
        
        if(+n_str[i]){
            strIdx = i;
            break;
        }
        
    }
    
    return n_str.slice(strIdx);
}