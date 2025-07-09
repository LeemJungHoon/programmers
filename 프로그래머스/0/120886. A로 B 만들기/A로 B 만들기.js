function solution(before, after) {
    let a = [...before].sort();
    let b = [...after].sort();
    
    return a.join('') === b.join('') ? 1 : 0;
}