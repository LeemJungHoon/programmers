function solution(num_list, n) {
    
    let arr_firstWord = [];
    let arr_secondWord = [];
    
    num_list.forEach((item, idx) => {
        idx < n ? arr_secondWord.push(item) : arr_firstWord.push(item);
    })
    arr_firstWord.push(...arr_secondWord);
    
    return arr_firstWord;
}