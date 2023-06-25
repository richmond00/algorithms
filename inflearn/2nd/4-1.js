/*
* input is given as array with numbers
* get sum of each numbers
* 128, 460
* 128 = 11
* 460 = 10
* ==> 128
*
* 1. loop the array
* 1.1 make number as string
* 1.2 split numbers 128 ==> 1, 2, 8
* 1.3 get sum of the splitted numebrs
* 1.4 compare the sum with current max
* if sum is bigger than max, then the sum is max
* if sum equals max, compare two numbers
* return sum
* */
const solution = (input) => {
    let max = 0;
    let output = 0;

    const inputStr = input.map((num) => String(num));
    inputStr.forEach((numStr) => {
        const splitted = numStr.split(''); // ['1', '2', '8']
        const sum = splitted.reduce((acc, curr) => {
            acc += +curr;
            return acc;
        }, 0); // 11

        if (sum > max) {
            max = sum;
            output = +numStr;
        } else if (sum === max) {
            output = Math.max(output, +numStr);
        }
    });

    return output;
};

const input = [128, 460, 603, 40, 521, 137, 123];
const output = solution(input);
console.log(output);
