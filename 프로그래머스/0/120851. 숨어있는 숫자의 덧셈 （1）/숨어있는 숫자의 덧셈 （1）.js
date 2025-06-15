function solution(my_string) {
    
    let arr = [...my_string].filter((item) => {
        return /^[0-9]$/.test(item)
    });
    
    return arr.reduce((acc,cur) => {
        return acc += Number(cur)
    },0);
    
}