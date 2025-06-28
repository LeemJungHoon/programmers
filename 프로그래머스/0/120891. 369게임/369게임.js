function solution(order) {
    return [...(order.toString())].filter((item) => item === "3" || item === "6" || item === "9"  ).length;
}