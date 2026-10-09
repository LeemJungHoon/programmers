function solution(s) {
    let arrS = s;
    let sLength = arrS.length;
    let cnt = 0;
    
    
    for(let i=0; i<sLength; i++){
        let bTrue = true;
        const stack = [];
        
        for(let item of arrS){
            
            if(item === "[" || item === "(" || item === "{"){
                stack.push(item);
            }else{
                switch(item){
                    case "]":
                        stack[stack.length-1] === "[" ? stack.pop() : bTrue = false;
                        break;
                    case "}":
                        stack[stack.length-1] === "{" ? stack.pop() : bTrue = false;
                        break;
                    case ")":
                        stack[stack.length-1] === "(" ? stack.pop() : bTrue = false;
                        break;
                }
            }
            if(!bTrue){
                break;
            }
            
        }
        stack.length === 0 && bTrue ? cnt++ : null;
        
        arrS = arrS.slice(1) + arrS.slice(0,1);
    }
    
    return cnt;
    
}