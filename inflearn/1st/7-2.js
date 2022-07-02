const solution = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]
      }
    }
  }

  return numbers;
}

const numbers = [13, 5, 11, 7, 23, 15];
const result = solution(numbers);
console.log(result);