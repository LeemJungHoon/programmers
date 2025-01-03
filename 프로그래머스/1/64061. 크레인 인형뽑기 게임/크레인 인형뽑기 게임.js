function solution(board, moves) {
    let basket = [];
    let removedDolls = 0;

    moves.forEach((move) => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][move - 1] > 0) { 
                let doll = board[i][move - 1];
                board[i][move - 1] = 0;

                if (basket[basket.length - 1] === doll) {
                    basket.pop();
                    removedDolls += 2;
                } else {
                    basket.push(doll);
                }
                break;
            }
        }
    });

    return removedDolls;
}
