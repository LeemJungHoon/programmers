function solution(arr1, arr2) {
    if(arr1.length === arr2.length){
        
        let arr1Num = arr1.reduce((acc,cur) => {
            return acc += cur;
        })
        
        let arr2Num = arr2.reduce((acc,cur) => {
            return acc += cur;
        })
        
        if(arr1Num > arr2Num) return 1;
        if(arr1Num < arr2Num) return -1;
        if(arr1Num === arr2Num) return 0;
    }else{
        return arr1.length > arr2.length ? 1 : -1;
    }
}