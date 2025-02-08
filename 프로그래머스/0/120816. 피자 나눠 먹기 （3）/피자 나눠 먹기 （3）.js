function solution(slice, n) {
    
    
    let num = Math.trunc(n/slice);
    
    return slice*num !== n ? num+1 : num;
}