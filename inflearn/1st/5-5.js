const solution = (numbers, m) => {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < m; i++) {
    sum += numbers[i];
  }
  
  for (let i = m; i < numbers.length; i++) {
    sum = sum + numbers[i] - numbers[i - m];
    max = Math.max(sum, max);
  }

  return max;
}

const numbers = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const result = solution(numbers, 3);
console.log(result);