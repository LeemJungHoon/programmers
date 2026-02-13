function solution(...nums) {
    let result = 0;

    const objNums = {};
    nums.forEach(item => {
        objNums[item] ? objNums[item]++ : objNums[item] = 1;
    });

    // 등장 횟수 기준 내림차순 정렬
    const arrNums = Object.entries(objNums).sort(([,a],[,b]) => b - a);

    // 같은 주사위 개수 확인
    const sameNums = Object.keys(objNums).length;

    switch (sameNums) {
        case 1: { // 네 개 다 같은 경우
            const p = Number(arrNums[0][0]);
            result = 1111 * p;
            break;
        }
        case 2: { // 세 개 같거나 두 개씩 같은 경우
            const [pKey, pCount] = arrNums[0];
            const [qKey, qCount] = arrNums[1];
            const p = Number(pKey);
            const q = Number(qKey);

            if (pCount === 3) {
                result = (10 * p + q) ** 2;
            } else { // 2+2
                result = (p + q) * Math.abs(p - q);
            }
            break;
        }
        case 3: { // 두 개만 같은 경우
            const [pKey] = arrNums[0];
            const q = Number(arrNums[1][0]);
            const r = Number(arrNums[2][0]);
            result = q * r;
            break;
        }
        case 4: { // 전부 다른 경우
            const s = Math.min(...nums);
            result = s;
            break;
        }
        default:
            console.log("오류");
    }

    return result;
}