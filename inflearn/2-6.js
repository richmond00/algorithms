const solution = (input) => {
  const length = input.length;
  let sum1 = 0;
  let sum2 = 0;
  let max = 0;

  for (let i = 0; i < length; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < length; j++) {
      sum1 += input[i][j];
      sum2 += input[j][i];
    }
    const tempMax = Math.max(sum1, sum2);
    if (max < tempMax) {
      max = tempMax;
    }
  }

  sum1 = 0;
  sum2 = 0;

  for (let i = 0; i < length; i++) {
    sum1 += input[i][i];
    sum2 += input[i][length - i - 1];
  }
  const tempMax = Math.max(sum1, sum2);
  if (max < tempMax) {
    max = tempMax;
  }

  return max;
}

const input = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
// 04 13 22 31 40

const result = solution(input);
console.log(result);