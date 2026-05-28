function solution(myString, pat) {
    
    
    let arr_myString = [...myString.toLowerCase()];
    let arr_pat = [...pat.toLowerCase()];
    
    if(arr_myString.length < arr_pat.length){
        return 0;
    }
    
    return +arr_myString.some((item,idx) => {
       if(item === arr_pat[0]){
            let word1 = arr_myString.slice(idx,idx+arr_pat.length);
             return (word1.length === arr_pat.length && word1.every((item,idx) => item === arr_pat[idx])) ? 1 : 0
        } 
    });
    
    
    
    
}