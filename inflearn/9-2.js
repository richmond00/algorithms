const solution = (n, arr) => {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let check = Array(n + 1).fill(false);
  
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  
  const dfs = (v) => {
    if (v === n) {
      answer++;
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (!check[graph[v][i]]) {
          check[graph[v][i]] = true;
          dfs(graph[v][i]);
          check[graph[v][i]] = false;
        }
      } 
    }
  }

  check[1] = true;
  dfs(1);
  console.log(graph);

  return answer;
}

const arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
const result = solution(5, arr);
console.log(result);