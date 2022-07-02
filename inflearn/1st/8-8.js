const solution = (n, m) => {
  let answer = [];
  let temp = Array.from({ length: m }, () => 0);

  const dfs = (level) => {
    if (level === m) {
      answer.push([...temp]);
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        temp[level] = i;
        dfs(level + 1);
      }
    }
  }


  dfs(0);

  return answer;
}

const result = solution(3, 2);
console.log(result);