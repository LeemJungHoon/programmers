function solution(rank, attendance) {
    
    const obj = {}
    
    let num = 0;
    
    rank.forEach((item,idx) => {
        attendance[idx] ? obj[item] = idx : null;
    })
    
    Object.values(obj).slice(0,3).forEach((item,idx) => {
        switch(idx){
            case 0:
                num += 10000*item;
                break;
            case 1:
                num += 100*item;
                break;
            case 2:
                num += item;
                break;
        }
    })
    
    return num;
    
}