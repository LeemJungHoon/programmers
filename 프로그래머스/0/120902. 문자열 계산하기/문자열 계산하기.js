function solution(my_string) {
    
    const arrString = my_string.split(" ");
    const arr = [];
    let sum = 0;
    
    arrString.forEach((item,idx) => {
        
        arr.push(item);
        console.log(arr, sum); 
        if(arr.length === 3){
            arr.includes("+") ? sum = (+arr[0] + +arr[2]) : sum = (+arr[0] - +arr[2]);
            arr.length = 0;
            arr.push(sum);
        }
        
           
    })
    
    
    return sum;
        
}