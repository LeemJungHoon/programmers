function solution(my_string, indices) {
    
    //string 돌면서 idx 가 indices의 원소에 존재한다면 해당 부분 리턴 x
    
    return [...my_string].map((item, idx) => {
        return indices.includes(idx) ?  null : item;
    }).filter((_) => _).join("");
}