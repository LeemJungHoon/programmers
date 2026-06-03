function solution(myString, pat) {
    
    let result = 0;
    
    for(let i=0; i<=myString.length - pat.length; i++){
        console.log(myString.slice(i,i+pat.length));
        myString.slice(i,i+pat.length) === pat ? result++ : 0;
    }
    
    return result;
}