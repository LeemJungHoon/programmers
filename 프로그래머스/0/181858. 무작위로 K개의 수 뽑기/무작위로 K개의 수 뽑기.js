function solution(arr, k) {
    
    const result = arr.sort((a,b) => a-b).slice(0,k);
    
    console.log(result);
}