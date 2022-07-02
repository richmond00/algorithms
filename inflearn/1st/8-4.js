const solution = (n) => {
  let check = Array.from({ length: n + 1 });

  const dfs = (v) => {
    let temp = "";
    if (v === n + 1) {
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) {
          temp = temp + i + " ";
        }
      }
      console.log(temp);
    } else {
      check[v] = 1;
      dfs(v + 1);
      check[v] = 0;
      dfs(v + 1);
    }
  }

  dfs(1);
}
    
const result = solution(3);
console.log(result);