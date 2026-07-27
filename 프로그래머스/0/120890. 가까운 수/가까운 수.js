function solution(array, n) {
    let num = [];
    
    array.forEach((item) => {
        
        let distance = Math.abs(item - n);
        
         if(num.length){
             
             if(Math.abs(num[0]) > distance){
                 num[0] = item-n;
                 num[1] = item;
                 
             }else if(num[0] === distance && num[1] > item){
                 num[1] = item;
             }
         }else{
             num.push(distance,item);
         }
    })
    
    return num[1];
}