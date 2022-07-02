const solution = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] > 0 &&  numbers[j + 1] < 0) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }

  return numbers;
}

const numbers = [1, 2, 3, -3, -2, 5, 6, -6];
const result = solution(numbers);
console.log(result);