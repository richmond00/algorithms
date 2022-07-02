const solution = (input) => {
  let answer = 0;
  let length = input.length;
  let flag = true;
  const ni = [-1, 0, 1, 0];
  const nj = [0, 1, 0, -1];
  

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      flag = true;
      const currentEl = input[i][j];

      for (let k = 0; k < 4; k++) {
        const di = i + ni[k];
        const dj = j + nj[k];
        const around = di >= 0 && di < length && dj >= 0 && dj < length ? input[di][dj] : 0;

        if (currentEl < around) {
          flag = false;
        }
      }

      if (flag) {
        console.log(i, j, input[i][j])
        answer++;
      }
    }
  }

  return answer;
}

const input = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 3],
];

const result = solution(input);
console.log(result);