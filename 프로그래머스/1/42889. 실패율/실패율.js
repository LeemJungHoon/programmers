function solution(N, stages) {
    const obj_result = {};
    
    for(let i=1; i<=N; i++){
        obj_result[i] ? null : obj_result[i]=0;
    }
    
    for(let i=1; i<=N; i++){
        let reachedPlayers = 0;
        let notClearPlayers = 0;
        
        stages.forEach((item,idx) => {
            if(item === i) notClearPlayers++;
            if(item >= i) reachedPlayers++;
        })
        obj_result[i] = (notClearPlayers/reachedPlayers);   
    }
    
    return Object.entries(obj_result)
        .sort(([a,b],[c,d]) => d-b)
        .map(([a,b]) => {return +a});
    
}