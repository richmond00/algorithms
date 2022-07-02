const solution = (numbers) => {
  for (let i = 1; i < numbers.length; i++) {
    const temp = numbers[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (numbers[j] > temp) {
        numbers[j + 1] = numbers[j];
      } else {
        break;
      }
    }

    numbers[j + 1] = temp;
  }

  return numbers;
}

const numbers = [11, 7, 5, 6, 10, 9];
const result = solution(numbers);
console.log(result);