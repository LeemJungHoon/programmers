function solution(x) {
    
    const n_sumX = [...(x+"")].reduce((acc,cur) => {
        return acc += +cur;
    },0);
    
    return x % n_sumX ? false : true;
    
}