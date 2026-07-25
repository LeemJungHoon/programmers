function solution(board, k) {
    
    let result = 0;
    let iLength = board.length;
    
    for(let i =0; i<iLength; i++){
        
        let jLength = board[i].length;
        
        for(let j=0; j<jLength; j++){
            
            i + j <= k ? result += board[i][j] : 0;
            
        }
    }
    
    return result;
}