function solution(num, total) {
    let start = Math.floor(total / num) - Math.floor((num - 1) / 2);

    let arr = [];
    
    for(let i=0; i<num; i++){
        arr.push(start+i);
    }
    return arr;
}