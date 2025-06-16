function solution(numbers) {
    let [ a, b] = numbers.sort((a,b) => b-a);
    let [c,d] = numbers.sort((a,b) => a-b);
    
    return a*b > c*d ? a*b : c*d
}