function solution(N, stages) {
    const obj = {};
    const reachedPlayer = [];
    let stageLength = stages.length;
    let num = 0;
    let cnt = 1;
    
    for(let i=1; i<=N; i++){
        obj[i] = 0;
    }
    
    stages.forEach((item) => {
        
        item <= N ? obj[item] += 1 : 0;
    })
    
    for(let i in obj){
        reachedPlayer.push([cnt,(obj[i]/(stageLength-num))]);
        num += obj[i];
        cnt++;
    }
    
    reachedPlayer.sort(([a,b],[c,d]) => d-b)
    
    return reachedPlayer.map(([a,b]) => a)
    
    
}