function solution(N, stages) {
    const obj_result = {};
    
    for(let i=1; i<=N; i++){
        obj_result[i] ? null : obj_result[i]=0;
    }
    
    const arr_result = Object.entries(obj_result);
    
    //이제 각각 스테이지에 실패율을 넣을것임
    Object.entries(obj_result).map(([sNum,_], idx) => {
        let reachedPlayers = 0;
        let notClearPlayers = 0;
        
        stages.forEach((item,idx) => {
            if(item === +sNum) notClearPlayers++;
            if(item >= +sNum) reachedPlayers++;
            
        })
        obj_result[sNum] = (notClearPlayers/reachedPlayers);
    })
    
    return Object.entries(obj_result)
        .sort(([a,b],[c,d]) => d-b)
        .map(([a,b]) => {return +a});
    
}