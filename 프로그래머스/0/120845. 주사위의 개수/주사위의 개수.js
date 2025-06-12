function solution(box, n) {
    let result = 1;
    
    box.forEach((item) => {
        result *= Math.trunc(item/n)
    })
    
    return result;
}