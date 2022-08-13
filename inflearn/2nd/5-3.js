const solution = (nums, target) => {
  let answer = 0;
  let lp = 0;
  let sum = 0;

  for (let rp = 0; rp < nums.length; rp++) {
    sum += nums[rp];

    if (sum === target) {
      answer++;
    }

    while (sum >= target) {
      sum -= nums[lp++];
      if (sum === target) {
        answer++;
      }
    }
  }
  return answer;
};

const numbers = [1, 2, 1, 3, 1, 1, 1, 2];
const result = solution(numbers, 6);
console.log(result);
