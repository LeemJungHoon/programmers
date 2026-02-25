function solution(my_string, is_suffix) {
    return [...my_string].map((item, idx) => {
        return my_string.slice(-idx)
    }).includes(is_suffix) ? 1 : 0;
}