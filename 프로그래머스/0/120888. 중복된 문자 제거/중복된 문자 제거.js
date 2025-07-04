function solution(my_string) {
    let answer = '';
    for (const ch of my_string) {
        // answer에 ch가 없을 때만 추가
        if (!answer.includes(ch)) {
            answer += ch;
        }
    }
    return answer;
}