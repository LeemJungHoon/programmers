function solution(id_pw, db) {
    
    let arr = [];
    
    for(let i=0; i<db.length; i++){
        if(db[i][0] === id_pw[0]){
            if(db[i][1] === id_pw[1]){
                return "login";
            }else{
                arr.push("wrong pw");
            }
        }
    }
    
    return arr.includes("wrong pw") ? "wrong pw" : "fail"
}