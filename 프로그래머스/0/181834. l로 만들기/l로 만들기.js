function solution(myString) {
    return [...myString].map((item,idx) => {
        return item.charCodeAt(0) < "l".charCodeAt(0) ? "l" : item;
    }).join("");
}