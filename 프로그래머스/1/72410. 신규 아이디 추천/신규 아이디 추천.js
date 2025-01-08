function solution(new_id) {
    //20 start
    
    let step1 = new_id.toLowerCase();
    let step2 = [...step1].filter((item) => {
        if(/[a-z]/.test(item) || /[0-9]/.test(item) || item === "-" || item === "_" || item === "."){
            return item;
        }
    }).join("");
    let step3 = [...step2];
    for(let i=0; i<step3.length; i++){
        if(step3[i] === "." && step3[i+1] === "."){
            step3.splice(i,1);
            i--;
        }
    }
    //step4
    step3[0] === "." ? step3.splice(0,1) : 0
    step3[step3.length-1] === "." ? step3.splice(step3.length-1,1) : 0
    //step5
    step3.length === 0 ? step3.push("a") : 0;
    //step6
    if(step3.length >= 16){
        step3.splice(15);
        step3[step3.length-1] === "." ? step3.splice(step3.length-1,1) : 0
    }
    //step7
    while(step3.length < 3){
        step3.push(step3[step3.length-1]);
    }
    return step3.join("");
}