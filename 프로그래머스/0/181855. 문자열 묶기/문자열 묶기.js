function solution(strArr) {
    
    const obj = {};
    
    strArr.forEach((item,idx) => {
        obj[item.length] ? obj[item.length]++ : obj[item.length] = 1;
    })
    
    return Object.values(obj).sort((a,b) => b-a)[0];
}