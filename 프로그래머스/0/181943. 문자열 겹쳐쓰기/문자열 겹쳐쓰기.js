function solution(my_string, overwrite_string, s) {
    
    return [...my_string].map((item,idx) => {
        return idx < s || idx >= s + overwrite_string.length ? item : overwrite_string[idx-s];
    }).join("");
}