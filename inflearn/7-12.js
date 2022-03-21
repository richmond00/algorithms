const solution = (target, numbers) => {
  numbers.sort((a, b) => a - b);

  let answer = 0;
  let left = Math.min(...numbers);
  let right = numbers[numbers.length - 1];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    let count = 1;
    let point = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      const num = numbers[i];
      const dist = num - point;

      if (dist >= mid) {
        count++;
        point = numbers[i];
      }
    }

    if (count >= target) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
    
const numbers = [1, 2, 8, 4, 9];
const result = solution(3, numbers);
console.log(result);