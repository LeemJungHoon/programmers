function solution(a, b, c) {
    
    let obj = {};
    let sameNum = 0;
    
    for(let i=1; i<=6; i++){
        
        obj[i] = 0;
    }
    
    obj[a] += 1;
    obj[b] += 1;
    obj[c] += 1;
        
    Object.values(obj).forEach((item) => {
        item ? sameNum++ : 0;
    }) ;
    
    switch(sameNum){
        case 3:
            return a + b + c;
            break;
        case 2:
            return (a + b+ c) * (a**2 + b**2 + c**2);
            break;
        case 1:
            return (a + b+ c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3);
            break;
        default :
                return "숫자 찾기 오류";
            break;
            
            
    }
    
}