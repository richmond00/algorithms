const solution = (target, numbers) => {
  let left = Math.max(...numbers);
  let right = numbers.reduce((acc, curr) => acc + curr, 0);
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let sum = 0;
    let era = 1;

    for (let i = 0; i < numbers.length; i++) {
      if (sum + numbers[i] > mid) {
        era++;
        sum = numbers[i];
      } else {
        sum += numbers[i];
      }
    }

    if (era <= target) {
      answer = mid;
      right = mid - 1;
    } else if (era > target) {
      left = mid + 1;
    }
  }

  return answer;
}
    
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = solution(3, numbers);
console.log(result);