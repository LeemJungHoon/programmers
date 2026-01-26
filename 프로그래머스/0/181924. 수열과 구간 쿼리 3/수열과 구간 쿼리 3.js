function solution(arr, queries) {
    
    [...queries].forEach((item,idx) => {
        const arr1 = [...arr];
        arr[item[0]] = arr1[item[1]];
        arr[item[1]] = arr1[item[0]];
    })
    
    return arr;
}