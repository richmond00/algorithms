const solution = (numbers, m) => {
  let answer = 0;
  let left = 0;
  let sum = 0;
  
  for (let right = 0; right < numbers.length; right++) {
    sum += numbers[right];

    while (sum > m) {
      sum -= numbers[left++];
    }
    answer += (right - left + 1);
  }

  return answer;
}

const numbers = [1, 3, 1, 2, 3];
const result = solution(numbers, 5);
console.log(result);