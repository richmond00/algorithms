const solution = (timelimit, scores, times) => {
  let answer = Number.MIN_SAFE_INTEGER;

  const dfs = (i, score, time) => {
    if (time > timelimit) {
      return;
    }

    if (i === scores.length) {
      answer = Math.max(answer, score);
      return;
    } else {
      dfs(i + 1, score + scores[i], time + times[i]);
      dfs(i + 1, score, time);
    }
  }

  dfs(0, 0, 0);

  return answer;
}

const result = solution(20, [10, 25, 15, 6, 7], [5, 12, 8, 3, 4]);
console.log(result);