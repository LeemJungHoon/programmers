function solution(l, r) {
    
    let result = [];
    
    for(let i=l; i<=r; i++){
        let bFalse = true;
        [...i.toString()].forEach((item) => {
            item === "0" || item === "5" ? 0 : bFalse = false;   
        });
        bFalse ? result.push(i) : 0;
    }
    
    return result.length >0 ? result : [-1];
    
}