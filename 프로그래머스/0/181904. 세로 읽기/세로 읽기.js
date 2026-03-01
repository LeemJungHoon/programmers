function solution(my_string, m, c) {
    
    let myArr = [];
    
    for(let i=0; i<my_string.length; i+=m){
        myArr.push([...my_string].slice(i,i+m));
    }
    
    return myArr.map((item,idx) => {
        return item[c-1]
    }).join("")
}