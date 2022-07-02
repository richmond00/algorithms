const solution = (n, r) => {
  let answer;
  let memo = Array.from(Array(35), () => Array(35).fill(0));

  const dfs = (n, r) => {
    if (memo[n][r] > 0) return memo[n][r];
    
    if (n === r || r === 0) {
      return 1;
    } else {
      return memo[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r);
    }
  }

  answer = dfs(n, r);

  return answer;
}

const result = solution(33, 19);
console.log(result);