function solution(str_list) {
    let arr_result = [];
    let cnt = 0;
    
    while(cnt <= str_list.length){
        
        if(str_list[cnt] === "l"){
            arr_result.push(...str_list.slice(0,cnt));
            break;
        }else if(str_list[cnt] === "r"){
            arr_result.push(...str_list.slice(cnt+1));
            break;
        }
        
        cnt++;
    }
    
    return arr_result;
}