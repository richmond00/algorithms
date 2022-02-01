const solution = (input) => {
  let answer = 0;
  const tests = input.length;
  const students = input[0].length;

  for (let i = 1; i <= students; i++) {
    for (let j = 1; j <= students; j++) {
      let cnt = 0;
      for (let k = 0; k < tests; k++) {
        let ri = 0;
        let rj = 0; 

        for (let s = 0; s < students; s++) {
          if (input[k][s] === i) {
            ri = s;
          }
          if (input[k][s] === j) {
            rj = s;
          } 
        }
        
        if (ri < rj) {
          cnt++;
        }
      }

      if (cnt === tests) {
        answer++;
      }
    }
  }

  return answer;
}

const input = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
const result = solution(input);
console.log(result);