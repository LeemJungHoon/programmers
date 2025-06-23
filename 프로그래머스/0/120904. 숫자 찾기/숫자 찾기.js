function solution(num, k) {
    let arr = [];
    [...num.toString()].forEach((item,idx) => {
        Number(item) === k ? arr.push(idx+1) : 0
    })
    
    return arr.length >0 ? arr[0] : -1;
}