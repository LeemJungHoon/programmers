function solution(my_string, n) {
    return [...my_string].map((item,idx) => {
        return item.repeat(n);
    }).join("");
}