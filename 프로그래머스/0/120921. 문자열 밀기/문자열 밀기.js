function solution(A, B) {

    let arrA = [];
    
    for(let i=0; i<A.length; i++){
        [...A].forEach((item, idx,arr) => {
            switch(idx){
                case 0 :
                    arrA.push(A[A.length-1]);
                    break;
                default :
                    arrA.push(A[idx-1]);
            }
        })
        if(arrA.join("") === B){
            return i+1 === A.length ? 0 : i+1;
            
        }else{
            A = arrA.join("");
            arrA = [];
        }
    }
    
    return -1;
    
}