function solution(my_string) {
    
    let deleteAlphabet = ["a","e","i","o","u"]
    
    return [...my_string].filter((item) => {
        return ![...deleteAlphabet].includes(item);
    }).join("");
}