function solution(num_list) {
    let cnt = 0;
    
        num_list.forEach((v,i) => {
            while(!(v ===1)){
                v % 2 === 0 ? v=v/2 : v=(v-1)/2;
                cnt++;
            }
        })
    
    return cnt;
}