function solution(spell, dic) {
    // spell을 정렬된 문자열로 변환
    const sortedSpell = spell.sort().join("");

    // dic의 각 단어를 정렬 후 비교
    const result = dic.some(word => word.split("").sort().join("") === sortedSpell);

    return result ? 1 : 2;
}
