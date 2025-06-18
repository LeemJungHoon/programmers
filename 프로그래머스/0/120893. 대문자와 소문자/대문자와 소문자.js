function solution(my_string) {
    return [...my_string].map((item) => {
        return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
    }).join("");
}