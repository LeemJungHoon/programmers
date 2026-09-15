function solution(arr)
{
    
    const newArr = [];
    
    for(let i=0; i<arr.length; i++){
        arr[i] === arr[i+1] ? null : newArr.push(arr[i]);
    }
    
    return newArr;
}