function solution(num_list) {
    
    let odd = "";
    let even = "";
    
    [...num_list].forEach((item,idx) => {
        item % 2 ? odd+=item : even+= item;   
    });
    
    return +odd + +even;
}