function solution(answers) {
    
    const obj = {
        "n1" : [1, 2, 3, 4, 5],
        "n2" : [2, 1, 2, 3, 2, 4, 2, 5],
        "n3" : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
        "1" : 0,
        "2" : 0,
        "3" : 0,
    }
    
    const result = [];
    
    answers.forEach((item,idx) => {
        obj.n1[idx%5] === item ? obj[1]++ : 0;
        obj.n2[idx%8] === item ? obj[2]++ : 0;
        obj.n3[idx%10] === item ? obj[3]++ : 0;
    });
    
    let maxNum = Math.max(obj[1],obj[2],obj[3])
    
    obj[1] === maxNum ? result.push(1) : 0;
    obj[2] === maxNum ? result.push(2) : 0;
    obj[3] === maxNum ? result.push(3) : 0;
    
    return result;
}