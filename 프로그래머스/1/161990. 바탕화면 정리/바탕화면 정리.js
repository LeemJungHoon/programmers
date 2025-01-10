function solution(wallpaper) {
    //30분
    const obj = {
        fileState : [],
    };
    let top = [];
    let left = [];
    let right = [];
    let btm = [];
    let hang = 0;
    
    wallpaper.forEach((item,idx) => {
        [...item].forEach((file,idx) => {
            if(file === "#"){
                obj.fileState.push([hang,idx]);
            }
        })
        hang++;
    })
    
    top = obj.fileState[0];
    btm = obj.fileState[obj.fileState.length-1];
    
    obj.fileState.sort(([a,b],[c,d]) => {
        return [b] - [d];
    })
    
    left = obj.fileState[0];
    right = obj.fileState[obj.fileState.length-1];
    
    return [top[0],left[1],btm[0]+1,right[1]+1];
    
}