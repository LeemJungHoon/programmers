function solution(numbers, hand) {
    let result = '';
    let leftThumb = '*';
    let rightThumb = '#';
    const keyPosition = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    function getDistance(pos1, pos2) {
        return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
    }

    numbers.forEach(number => {
        if ([1, 4, 7].includes(number)) {
            result += 'L';
            leftThumb = number;
        } else if ([3, 6, 9].includes(number)) {
            result += 'R';
            rightThumb = number;
        } else {
            const leftDistance = getDistance(keyPosition[leftThumb], keyPosition[number]);
            const rightDistance = getDistance(keyPosition[rightThumb], keyPosition[number]);

            if (leftDistance < rightDistance || (leftDistance === rightDistance && hand === 'left')) {
                result += 'L';
                leftThumb = number;
            } else {
                result += 'R';
                rightThumb = number;
            }
        }
    });

    return result;
}
