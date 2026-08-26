function solution(numbers) {
    
    let result = "";
    let temp_numbers = "";
    const obj = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9,
    }
    
    numbers.split("").forEach((item) => {
        temp_numbers += item;
        
        if((temp_numbers in obj)) {
            result += obj[temp_numbers];
            temp_numbers = "";
        }
    })
    
    return +result;
    
    
}