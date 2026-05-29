function solution(myString) {
    return [...myString].map((item,idx) => {
        return item === "a" || item === "A" ? "A" : item.toLowerCase();
    }).join("");
}