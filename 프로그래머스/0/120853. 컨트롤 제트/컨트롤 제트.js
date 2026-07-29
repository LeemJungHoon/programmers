function solution(s) {
    
    let beforeS = 0;
    
    return s.split(" ").reduce((acc,cur) => {
        
        if(cur !== "Z"){
            beforeS = +cur;
            acc += +cur;
        }else{
            acc -= beforeS;
        }
        return acc
    },0)
}