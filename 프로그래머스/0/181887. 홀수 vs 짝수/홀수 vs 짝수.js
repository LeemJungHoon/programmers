function solution(num_list) {
    
    let odd = 0;
    let even = 0;
    
    num_list.forEach((item,idx) => {
        idx%2 ? odd+=item : even+=item;
    })
    
    return odd > even ? odd : even;
}