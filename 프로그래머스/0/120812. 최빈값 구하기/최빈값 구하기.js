function solution(array) {
    //48
    const obj = {};
    let arr = [];
    array.forEach((item) => {
        obj[item] === undefined ? obj[item] = 1 : obj[item] += 1;
    })
    
    let num = Object.values(obj).sort((a,b) => b-a )[0];
    
    console.log(obj,num);
    for(let key in obj){
        obj[key] === num ? arr.push(+key) : 0;
    }
    
    return arr.length === 1 ? arr[0] : -1;
}