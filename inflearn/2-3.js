const solution = (inputA, inputB) => {
  let answer = [];

  for (let i = 0; i < inputA.length; i++) {
    let result = "";
    const a = inputA[i];
    const b = inputB[i];

    if (a === b) {
      result = "D";
    } else if (a === 1 && b === 3) {
      result = "A";
    } else if (a === 2 && b === 1) {
      result = "A";
    } else if (a === 3 && b === 2) {
      result = "A";
    } else {
      result = "B";
    }

    answer.push(result);
  }

  return answer;
}

const result = solution([2,3,3,1,3], [1,1,2,2,3]);
console.log(result);