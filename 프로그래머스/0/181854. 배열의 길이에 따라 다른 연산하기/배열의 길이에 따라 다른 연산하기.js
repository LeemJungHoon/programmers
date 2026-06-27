function solution(arr, n) {
    
    return arr.length % 2 ? arr.map((item,idx) => {
      return idx % 2 ? item : item+n;
    }) : arr.map((item,idx) => {
      return idx % 2 ? item+n : item;
    })
    
    
}