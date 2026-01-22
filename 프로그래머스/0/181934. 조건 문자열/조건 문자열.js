function solution(ineq, eq, n, m) {
    if(ineq === ">"){
        switch(eq){
            case "=" :
            return n >= m ? 1 : 0;
            break;
        case "!" :
            return n > m ? 1 : 0;       
        }
    }else{
         switch(eq){
        case "=" :
            return n <= m ? 1 : 0;
        case "!" :
            return n < m ? 1 : 0;
    }   
    }
    
   
    
}