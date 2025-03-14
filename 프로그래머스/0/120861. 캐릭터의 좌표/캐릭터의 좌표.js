function solution(keyinput, board) {
    //43
    
    let result = [0,0];
    
    keyinput.forEach((item) => {
        switch(item){
            case "left" :
                Math.abs(result[0]-1) > Math.trunc(board[0]/2) ? 0 : result[0] += -1;
                break;
            case "right" :
                Math.abs(result[0]+1) > Math.trunc(board[0]/2) ? 0 : result[0] += +1;
                break;
            case "up" :
                Math.abs(result[1]+1) > Math.trunc(board[1]/2) ? 0 : result[1] += +1;
                break;
            case "down" :
                Math.abs(result[1]-1) > Math.trunc(board[1]/2) ? 0 : result[1] += -1;
                break;
        }
    })
    
    return result;
}