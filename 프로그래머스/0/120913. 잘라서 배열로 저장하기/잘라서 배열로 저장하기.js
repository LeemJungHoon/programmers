function solution(my_str, n) {
    
    let arr = [];
    
    for(let i=1; i<=my_str.length; i+=n){
        arr.push(my_str.slice(i-1,i+n-1));
    }
    
    return arr;
}