function solution(board) {
    let len = board.length;
    let num = 0;
    let dangerZone = Array.from({ length: len }, () => Array(len).fill(0));

    board.forEach((row, rowIdx) => {
        row.forEach((cell, colIdx) => {
            if (cell === 1) {
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        let newRow = rowIdx + i;
                        let newCol = colIdx + j;
                        if (newRow >= 0 && newRow < len && newCol >= 0 && newCol < len) {
                            dangerZone[newRow][newCol] = 1;
                        }
                    }
                }
            }
        });
    });

    board.forEach((row, rowIdx) => {
        row.forEach((cell, colIdx) => {
            if (dangerZone[rowIdx][colIdx] === 0) {
                num++;
            }
        });
    });

    return num;
}
