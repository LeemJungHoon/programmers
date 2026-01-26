function solution(num_list) {
    let sum1 = [...num_list].reduce((acc,cur) => {
        return acc *= cur;
    },1)
    
    let sum2 = [...num_list].reduce((acc,cur) => {
        return acc += cur
    },0) ** 2
    
    return sum1 > sum2 ? 0 : 1;
}