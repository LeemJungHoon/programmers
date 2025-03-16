function solution(lines) {
    
   const objLines = {};
    let num = 0;
    lines.forEach((item) => {
        for(let i=item[0]; i<item[1]; i++){
            objLines[i] ? objLines[i]++ : objLines[i] = 1;
        }
    })
    //console.log(objLines);
    
    for(let key in objLines){
        objLines[key] > 1 ? num++ : 0;
    }
    
    return num;
}