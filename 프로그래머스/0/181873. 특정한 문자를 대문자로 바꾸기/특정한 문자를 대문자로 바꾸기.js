function solution(my_string, alp) {
    return [...my_string].map((item,idx) => {
        return item === alp ? item.toUpperCase() : item;
    }).join("")
}