function solution(N, stages) {
    //2시 20분 시작
    //스테이지 돌면서, 각 아이템이
    //obj만들고, 스테이지 돌면서 각 아이템 = 아이템+ 하면 스테이지에 도달한 값 나오지?
    //그리고  obj 돌면서 0인거 제외하고
    
    //
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