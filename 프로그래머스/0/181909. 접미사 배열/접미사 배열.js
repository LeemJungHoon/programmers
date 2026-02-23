function solution(my_string) {
    return [...my_string].map((item,idx,myArr) => {
        return myArr.slice(idx).join("");
    }).sort();
}