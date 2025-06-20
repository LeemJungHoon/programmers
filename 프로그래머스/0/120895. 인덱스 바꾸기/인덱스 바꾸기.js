function solution(my_string, num1, num2) {
    let a = my_string[num1];
    let b = my_string[num2];
    
    return [...my_string].map((item,idx) => {
        if(idx === num1) { return b}
        if(idx === num2) { return a}
        return item;
    }).join("");
}