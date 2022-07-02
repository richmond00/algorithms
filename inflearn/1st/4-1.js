const solution = (input) => {
  let answer = 0;
  let max = 0;

  for (let i = 0; i < input.length; i++) {
    let sum = 0;
    let num = input[i];

    while (num !== 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    // sum = num.toString().split("").reduce((acc, curr) => acc += Number(curr), 0);

    if (max < sum) {
      max = sum;
      answer = input[i];

    } else if (max === sum) {
      if (answer < input[i]) {
        answer = input[i];
      }
    }
  }

  return answer;
}

const input = [128, 460, 603, 40, 521, 137, 123];
const result = solution(input);
console.log(result);