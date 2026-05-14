function solution(names) {
    let arr_result = [];
    
    for(let i=0; i<names.length; i+=5){
        arr_result.push(names[i]);
    }
    
    return arr_result;
}