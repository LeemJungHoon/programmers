function solution(participant, completion) {
    
    //참가자 배열에서 완주했으면 완주 배열 제거
    
    const arrP = [...participant.sort()];
    const arrC = [...completion.sort()];
    
    let pNum = participant.length;
    
    for(let i=0; i<pNum; i++){
        if(arrP[i] === arrC[i]){
            continue;
        }else{
            return arrP[i];
        }
    }
}