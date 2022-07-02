const solution = (n) => {
  
  const dfs = (n) => {
    if (n > 7) {
      return;
    } else {
      // console.log(n);
      dfs(n * 2);
      // console.log(n);
      dfs(n * 2 + 1);
      console.log(n);
    }
  }

  dfs(n);
}
    
const result = solution(1);
console.log(result);