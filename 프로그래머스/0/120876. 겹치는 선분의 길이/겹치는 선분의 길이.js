function solution(lines) {
    const objLines = {};
    let result = 0;
    
    lines.forEach(item => {
        let [start, end] = item;
        for(let i = start; i < end; i++) {
            objLines[i] !== undefined ? objLines[i] += 1 : objLines[i] = 1;
        }
    });

    Object.keys(objLines).forEach(key => {
        if (objLines[key] > 1) result++;
    });

    return result;
}
