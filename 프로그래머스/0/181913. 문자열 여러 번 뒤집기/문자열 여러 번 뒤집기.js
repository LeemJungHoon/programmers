function solution(my_string, queries) {
    
    let newWords = my_string;
    
    queries.forEach(([s,e]) => {
        
        let first = newWords.slice(0, s);
        let last = newWords.slice(e+1);
        let words = [...newWords.slice(s, e+1)].reverse().join("");
        
        newWords = first + words + last;
    });
    
    return newWords;
}