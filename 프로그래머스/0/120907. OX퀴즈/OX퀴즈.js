function solution(quiz) {
    return quiz.map((item,idx) => {
        let num1 = item.split("=")[0];
        let num2 = item.split("=")[1];
        
        const [x , y, z] = num1.split(" ");
        
        
        switch(y){
            case "-" :
                return +x - +z === +num2 ? "O" : "X";
            case "+" :
                return +x + +z === +num2 ? "O" : "X";
        }
    })
}