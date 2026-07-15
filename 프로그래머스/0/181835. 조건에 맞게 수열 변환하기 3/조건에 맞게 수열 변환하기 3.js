function solution(arr, k) {
    return arr.map((item) => {
        return k % 2 ? item*k : item+k;
    })
}