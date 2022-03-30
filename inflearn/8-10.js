const solution = (n, m) => {
  let answer = [];
  let temp = Array.from({ length: m }, () => 0);
  let check = Array.from({ length: n.length }, () => false);

  const dfs = (level, temp, check) => {
    if (level === m) {
      answer.push([...temp]);
      
    } else {
      for (let i = 0; i < n.length; i++) {
        if (!check[i]) {
          temp[level] = n[i];
          check[i] = true;
          dfs(level + 1, temp, check);
          check[i] = false;
        }
      }
    }
  }

  dfs(0, temp, check);

  return answer;
}

const result = solution([3, 6, 9], 2);
console.log(result);