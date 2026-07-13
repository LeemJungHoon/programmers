function solution(picture, k) {
    
    const arrResult = [];
    
    picture.forEach((item) => {
        const word = [...item].map((v) => {
            return v.repeat(k);
        }).join("");
        
        for(let i=1; i<=k; i++){
            arrResult.push(word);
        }
    })
    
    return arrResult;
}