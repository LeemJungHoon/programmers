function solution(a, d, included) {
    
    let sum = 0;
    
    included.forEach((item ,idx) => {
        item ? sum += a + d*(idx) : 0;
    })
    
    return sum;
    
}