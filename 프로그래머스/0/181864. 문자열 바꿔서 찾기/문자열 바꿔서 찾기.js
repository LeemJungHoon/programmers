function solution(myString, pat) {
    return [...myString].map((item) => {
        return item === "A" ? "B" : "A";
    }).join("").includes(pat) ? 1 : 0;
}