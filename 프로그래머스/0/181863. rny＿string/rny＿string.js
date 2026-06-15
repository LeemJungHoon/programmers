function solution(rny_string) {
    return [...rny_string].map((v) => {
        return v === "m" ? "rn" : v;
    }).join("");
}