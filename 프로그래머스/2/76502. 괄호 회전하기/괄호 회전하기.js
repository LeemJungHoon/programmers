function solution(s) {
    let cnt = 0;
    let rotated = s;

    for (let i = 0; i < s.length; i++) {
        const stack = [];
        let bTrue = true;

        for (const item of rotated) {
            if (
                item === "[" ||
                item === "(" ||
                item === "{"
            ) {
                stack.push(item);
            } else {
                switch (item) {
                    case "]":
                        if (stack[stack.length - 1] === "[") {
                            stack.pop();
                        } else {
                            bTrue = false;
                        }
                        break;

                    case ")":
                        if (stack[stack.length - 1] === "(") {
                            stack.pop();
                        } else {
                            bTrue = false;
                        }
                        break;

                    case "}":
                        if (stack[stack.length - 1] === "{") {
                            stack.pop();
                        } else {
                            bTrue = false;
                        }
                        break;
                }
            }

            if (!bTrue) {
                break;
            }
        }

        if (bTrue && stack.length === 0) {
            cnt++;
        }

        rotated = rotated.slice(1) + rotated[0];
    }

    return cnt;
}