function solution(n) {
    
    let answer = 0;
    
    if(n%2){
        //홀수
        for(let i=1; i<=n; i+=2){
            answer+=i;
        }
        return answer;
    }else{
        //짝수
        for(let i=2; i<=n; i+=2){
            answer+=i*i;
        }
        return answer;
    }
    
    
}