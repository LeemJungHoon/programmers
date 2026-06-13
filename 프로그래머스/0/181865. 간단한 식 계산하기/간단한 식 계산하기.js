function solution(binomial) {
    let result = 0;
    
    if(binomial.includes("+")){
        result = binomial.split("+").map((item) => +item).reduce((a,c) => a += c);
    }
        
    if(binomial.includes("-")){
        result = binomial.split("-").map((item) => +item).reduce((a,c) => a-=c);
    }
    if(binomial.includes("*")){
        result = binomial.split("*").map((item) => +item).reduce((a,c) => a*=c);
    }
    
    return result;
}