const solution = (n) => {
  const dfs = (n) => {
    if (n === 1) {
      return 1;
    } else {
      return n * dfs(n - 1);
    }
  }

  const answer = dfs(n);

  return answer;
}

const result = solution(5);
console.log(result);