const solution = (numbers) => {
  let answer = "NO";
  let flag = false;
  const gross = numbers.reduce((acc, curr) => acc + curr, 0);

  const dfs = (i, sum) => {
    if (flag) {
      return;
    }
    
    if (i === numbers.length) {
      const diff = gross - sum;
      if (diff === sum) {
        answer = "YES";
        flag = true;
      }

      return;
    } else {
      dfs(i + 1, sum + numbers[i]);
      dfs(i + 1, sum);
    }
  }

  dfs(0, 0);

  return answer;
}
    
const result = solution([1, 3, 5, 6, 7, 10]);
console.log(result);