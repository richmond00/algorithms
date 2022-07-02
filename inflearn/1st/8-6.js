const solution = (numbers, limit) => {
  let answer = Number.MIN_SAFE_INTEGER;
  
  const dfs = (i, sum) => {
    if (sum > limit) {
      return;
    }

    if (i === numbers.length) {  
      answer = Math.max(answer, sum);
      return;
    } else {
      dfs(i + 1, sum + numbers[i]);
      dfs(i + 1, sum);
    }
  }

  dfs(0, 0);

  return answer;
}
    
const result = solution([81, 58, 42, 33, 61], 259);
console.log(result);