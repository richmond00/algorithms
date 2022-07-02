const solution = (target, numbers) => {
  let answer = -1;
  let left = 0;
  let right = numbers.length - 1;

  numbers.sort((a, b) => a - b);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midNum = numbers[mid];

    if (target === midNum) {
      answer = mid + 1;
      break;
    } else if (target > midNum) {
      left = mid + 1;
    } else if (target < midNum) {
      right = mid - 1;
    }
  }

  return answer;
}
  
const numbers = [23, 87, 65, 12, 57, 32, 99, 81];
const result = solution(32, numbers);
console.log(result);