function solution(s) {
    
    let obj = {};
    
    let result = [];
    
    [...s].forEach((item,idx) => {
        obj[item] ? obj[item]++ : obj[item] = 1;
    })
    
    for(let key in obj){
        obj[key] === 1 ? result.push(key) : 0;
    }
    
    return result.sort().join("");
}