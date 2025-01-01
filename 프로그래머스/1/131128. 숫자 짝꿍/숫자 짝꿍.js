function solution(X, Y) {
    //10start
    const obj = {};
    let num = [];
    [...X].forEach((item, idx) => {
        obj[item] ? obj[item] += 1 : obj[item] = 1;
    });
    [...Y].forEach((item, idx) => {
        if(obj[item]){
            obj[item] -= 1;
            obj[item] < 0 ? 0 : num.push(item);
        }
    });
    
    num = num.sort((a,b) => b-a);
    
    if(num[0] === "0"){
        return "0";
    }else {
        return num.length === 0 ? "-1" : num.join("");
    }
    
}