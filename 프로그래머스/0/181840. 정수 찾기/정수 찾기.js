function solution(num_list, n) {
    
    let bTrue = false
    
    num_list.forEach((item) => {
        item === n ? bTrue = true : null;
    })
    
    return +bTrue;
}