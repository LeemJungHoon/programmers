function solution(num_list) {
    let arr = [...num_list];
    let num1 = num_list.pop();
    let num2 = num_list.pop();
    
    num1 > num2 ? arr.push(num1 - num2) : arr.push(num1*2);
    return arr;
}