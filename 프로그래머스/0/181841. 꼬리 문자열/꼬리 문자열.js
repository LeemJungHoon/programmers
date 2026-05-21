function solution(str_list, ex) {
    return str_list.filter((item,idx) => {
        return !item.includes(ex)
    }).join("");
}