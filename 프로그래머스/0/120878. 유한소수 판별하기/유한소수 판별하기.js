function solution(a, b) {
    let arrA = [];
    let arrB = [];
    let sameNums = [];
    
    for(let i=2; i<=a; i++){
        a%i === 0 ? arrA.push(i) : 0
    }
    
    for(let i=2; i<=b; i++){
        b%i === 0 ? arrB.push(i) : 0
    }
    
    arrA.sort((a,b) => b-a)
        .forEach((item) => {
        arrB.includes(item) ? sameNums.push(item) : 0;
    })
    
    sameNums[0] ? (a /= sameNums[0] , b /= sameNums[0]) : 0;

    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;
    
    return b === 1 ? 1 : 2;
}