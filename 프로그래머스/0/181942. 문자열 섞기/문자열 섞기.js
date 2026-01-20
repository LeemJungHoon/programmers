function solution(str1, str2) {
    
    return [...str1].map((item,idx) => {
        return item + str2[idx];
    }).join("");
    
}