function solution(rsp) {
    
    let str = "";
    
    [...rsp].forEach((item,idx) => {
        switch(item) {
            case "2":
                str += "0";
                break;
            case "0" :
                str += "5";
                break;
            case "5" :
                str += "2";
                break;
        }
    })
    
    return str;
}