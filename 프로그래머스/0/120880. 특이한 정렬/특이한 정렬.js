function solution(numlist, n) {
    //40
    let arr = [];
    
    numlist.forEach((item) => {
        arr.push([item,Math.abs(n - item)])
    })
    
    arr.sort(([a,b],[c,d]) => {
        return b-d;
    });
    
    arr.sort(([a,b],[c,d]) => {
        return d-b === 0 ? c-a : 0;
    });
    
    return arr.map((item) => {
        return item[0];
    })
    
    
}