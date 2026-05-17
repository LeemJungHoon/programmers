function solution(answers) {
    
    const arr1 =[1,2,3,4,5];
    const arr2 =[2,1,2,3,2,4,2,5];
    const arr3 =[3,3,1,1,2,2,4,4,5,5];
    
    let cntNums = new Array(3).fill(0);
    
    answers.forEach((item,idx) => {
        item === arr1[idx%arr1.length] ? cntNums[0]++ : 0;
        item === arr2[idx%arr2.length] ? cntNums[1]++ : 0;
        item === arr3[idx%arr3.length] ? cntNums[2]++ : 0;
    })
    
    let maxNum = Math.max(cntNums[0],cntNums[1],cntNums[2]);
    
    return cntNums.map((item,idx) => {
        return item === maxNum ? idx+1 : null;
    }).filter((_) => _);
    
}