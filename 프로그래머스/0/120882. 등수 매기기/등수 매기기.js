function solution(score) {
    const arrScore = score.map((item) => {
        return (item[0]+item[1])/2;
    });
    
    const sortScore = [...arrScore].sort((a,b) => b-a);
    
    
    return arrScore.map((arrItem) => {
        return sortScore.indexOf(arrItem) + 1
    })
}