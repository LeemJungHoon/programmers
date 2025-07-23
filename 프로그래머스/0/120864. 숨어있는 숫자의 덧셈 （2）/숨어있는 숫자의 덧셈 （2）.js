function solution(my_string) {
    let numbers = my_string.match(/\d+/g);
    if (!numbers) return 0;
    return numbers.map(Number).reduce((a, b) => a + b, 0);
}