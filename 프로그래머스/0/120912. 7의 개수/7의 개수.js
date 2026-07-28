function solution(array) {
    return array.reduce((acc,cur) => {
        
        let curLength = (cur+"").length;
        let sCur = cur+"";
        
        for(let i=0; i<curLength; i++){
            sCur[i].includes("7") ? acc+=1 : 0;
        }
         return acc
    },0)
}