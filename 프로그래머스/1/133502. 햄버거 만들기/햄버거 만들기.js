function solution(ingredient) {
    //20start
    //1=빵 2=야채 3=고기
    let num = 0;
    let arr = [];
    for(let i=0; i<ingredient.length; i++){
        arr.push(ingredient[i])
        
        if(arr.length >= 4){
            if(arr[arr.length-1] === 1 && arr[arr.length-2] === 3 &&
              arr[arr.length-3] === 2 && arr[arr.length-4] === 1 )
               {
               arr.splice(-4,4);
                num++;
               }
        }
    }
    return num;
    
}