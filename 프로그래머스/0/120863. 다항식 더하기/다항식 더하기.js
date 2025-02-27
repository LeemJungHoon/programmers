function solution(polynomial) {
    let splitPoly = polynomial.split("+");
    
    const arrX = [];
    const arrNums = [];
    
    splitPoly.forEach((item) => {
        let it = item.trim();
        it.includes("x") 
            ?   it === "x" ? arrX.push(1) : arrX.push(+it.split("x")[0])
            :   arrNums.push(+it);
    })
    
    let x = arrX.length >= 1 ? arrX.reduce((acc,cur) => acc += cur) : 0;
    let y = arrNums.length >= 1 ? arrNums.reduce((acc,cur) => acc += cur) : 0;
    
    x === 1 ? x = "" : 0;
    
    if(arrX.length >= 1 && arrNums.length >= 1){
        return `${x}x + ${y}`
    }else if(arrX.length >= 1 && arrNums.length < 1){
        return `${x}x`
    }else if(arrX.length < 1 && arrNums.length >= 1){
        return `${y}`
    }
}