function solution(order) {
    return order.reduce((acc,cur) => {
        return cur.includes("ame") || cur.includes("anything")  ? acc+= 4500 : acc+=5000;
    },0);
}