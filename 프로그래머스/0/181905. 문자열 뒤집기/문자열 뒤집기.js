function solution(my_string, s, e) {
    
    let words = [...my_string].slice(s,e+1)
    
    return my_string.replace(words.join(""),words.reverse().join(""));
}