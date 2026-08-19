function solution(a, b) {
    
    const sNum = Math.min(a,b);
    const bNum = Math.max(a,b);
    let sum = 0;
    
    for(let i=sNum; i<=bNum; i++){
        sum += i;
    }
    return sum;
}