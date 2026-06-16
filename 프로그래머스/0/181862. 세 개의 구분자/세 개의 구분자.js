function solution(myStr) {
    const result = [...myStr].map((item) => {
        return item === "a" || item === "b" || item === "c" ? " " : item;
    }).join("").split(" ").filter((v) => v);
    
    return result.length === 0 ? ["EMPTY"] : result;
}