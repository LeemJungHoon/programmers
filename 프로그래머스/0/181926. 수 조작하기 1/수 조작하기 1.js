function solution(n, control) {
    [...control].forEach((item) => {
        switch(item){
            case "w":
                n++;
                break;
            case "a":
                n-=10;
                break;
            case "s":
                n--;
                break;
            case "d":
                n+=10;
                break;
            default :
                break;
        } 
    })
    
    return n;
}