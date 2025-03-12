function solution(dots) {
    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 0;
    
    x1 = dots.sort(([a,b],[c,d]) => [a]-[c])[0][0];
    x2 = dots.sort(([a,b],[c,d]) => [c]-[a])[0][0];
    y1 = dots.sort(([a,b],[c,d]) => [b]-[d])[0][1];
    y2 = dots.sort(([a,b],[c,d]) => [d]-[b])[0][1];
    
    return Math.abs(x1-x2) * Math.abs(y1-y2)
}