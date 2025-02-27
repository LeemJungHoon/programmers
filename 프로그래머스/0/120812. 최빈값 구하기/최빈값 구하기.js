function solution(array) {
    const obj = {};
    const arr = [];
    
    array.forEach((item) => {
        obj[item] === undefined ? obj[item] = 1 : obj[item] += 1;
    })
    
    const num = Object.values(obj).sort((a,b) => b-a )[0];
    
    for(let key in obj){
        obj[key] === num ? arr.push(+key) : 0;
    }
    
    return arr.length === 1 ? arr[0] : -1;
}