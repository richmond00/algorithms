const solution = (nums, m, target) => {
  let answer = 0;
  let sum = 0;

  const dfs = (level, start, sum) => {
    if (level === m) {
      if (sum % target === 0) {
        answer++;
      }
    } else {
      for (let i = start; i < nums.length; i++) {
        dfs(level + 1, i + 1, sum + nums[i]);
      }
    }

  }

  dfs(0, 0, sum);

  return answer;
}

const result = solution([2, 4, 5, 8, 12], 3, 6);
console.log(result);