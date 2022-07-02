const solution = (coins, target) => {
  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (level, sum) => {
    if (sum > target) {
      return;
    }

    if (level >= answer) { 
      return;
    }

    if (sum === target) {
      answer = Math.min(level, answer);
      return;
    } else {
      for (let i = 0; i < coins.length; i++) {
        dfs(level + 1, sum + coins[i]);
      }
    }

  }

  dfs(0, 0);


  return answer;
}

const result = solution([1, 2, 5], 15);
console.log(result);