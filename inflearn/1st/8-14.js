const solution = (n, m) => {
  let answer = [];
  let temp = Array(m).fill(0);

  const dfs = (level, start) => {
    if (level === m) {
      answer.push([...temp]);
    } else {
      for (let i = start; i <= n; i++) {
        temp[level] = i;
        dfs(level + 1, i + 1);
      }

    }
  }

  dfs(0, 1);

  return answer;
}

const result = solution(4, 2);
console.log(result);