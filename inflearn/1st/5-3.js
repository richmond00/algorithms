const solution = (numbers, m) => {
  let answer = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < numbers.length; right++) {
    sum += numbers[right];

    if (sum === m) {
      answer++;
    }

    while (sum >= m) {
      sum -= numbers[left++];

      if (sum === m) {
        answer++;
      }
    }
  }

  return answer;
}

const numbers = [1, 2, 1, 3, 1, 1, 1, 2];
const result = solution(numbers, 6);
console.log(result);