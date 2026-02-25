function solution(my_string, is_prefix) {
    return +[...my_string].map((_,idx) => {
        return my_string.slice(0,idx+1);
    }).includes(is_prefix)
}