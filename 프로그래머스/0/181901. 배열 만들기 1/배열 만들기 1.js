function solution(n, k) {
    let arrNums = [];
    for(let i=k; i<=n; i+=k){
        arrNums.push(i);
    }
    return arrNums;
}