function solution(q, r, code) {
    return [...code].filter((_,idx) => {
        return idx % q === r
    }).join("")
}