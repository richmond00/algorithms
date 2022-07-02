const solution = (steps) => {
  let answer = 0;
  let dy = Array(steps).fill(0);

  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= steps + 1; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  answer = dy[steps + 1];

  return answer;
}

const result = solution(7);
console.log(result);