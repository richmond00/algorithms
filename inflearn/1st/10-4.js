const solution = (m, coin) => {
  let answer = 0;
  let dy = Array(m + 1).fill(1000);
  dy[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }

  answer = dy[m];
  
  return answer;
}

const arr = [1, 2, 5];
const result = solution(15, arr);
console.log(result);