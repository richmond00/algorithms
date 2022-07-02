const solution = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let minIndex = i;

    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] < numbers[minIndex]) {
        minIndex = j;
      }
    }

    let temp = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp;
  }

  return numbers;
}

const numbers = [13, 5, 11, 7, 23, 15];
const result = solution(numbers);
console.log(result);