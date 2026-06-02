function solution(myString, pat) {
    let cnt = 0;
    for(let i=0; i<=myString.length; i++){
        myString.slice(i, i+pat.length) === pat ? cnt++ : 0;
    }
    return cnt;
}