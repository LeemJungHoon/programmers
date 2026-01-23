function solution(code) {
    let mode = 0;
    
    let ret = "";
    
    [...code].forEach((item, idx) => {
        switch(mode){
                //모드가 0
            case 0 :
                if(item !== "1"){
                    //짝수일 경우
                    idx%2 ? 0 : ret += item;
                }else{
                    mode = 1;    
                }
                break;
            case 1 :
                if(item !== "1"){
                    //홀수일 경우
                    idx%2 ? ret += item : 0;   
                }else{
                    mode = 0;    
                }
                break;
        }
    })
    
    return ret ? ret : "EMPTY";
}