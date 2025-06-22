function solution(array) {
    const a = array.reduce((acc,cur) => {
        return acc = (cur > acc ? cur : acc);
    })
    const b = array.indexOf(a);
    
    return [a,b]
}