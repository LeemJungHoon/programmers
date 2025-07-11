function solution(i, j, k) {
    
    let num = 0;
    
    for(let a=i; a<=j; a++){
        [...a.toString()].forEach((item,idx) =>{
            item === k.toString() ? num++ : 0;
        })
    }
    
    return num;
}