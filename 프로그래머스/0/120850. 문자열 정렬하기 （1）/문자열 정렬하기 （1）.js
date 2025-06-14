function solution(my_string) {
    
    let arr = [];
    
    [...my_string].forEach((item) => {
        (/^[0-9]$/.test(item)) ? arr.push(Number(item)) : 0;
        }
    )
    return arr.sort((a,b) => a-b);
}