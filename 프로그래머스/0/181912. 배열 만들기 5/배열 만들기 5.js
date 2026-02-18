function solution(intStrs, k, s, l) {
    return intStrs.map((item) => {
        let nums = +[...item].slice(s,s+l).join("");
        return nums > k ? nums : 0;
    }).filter((_) => _)
}