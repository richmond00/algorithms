const solution = (input) => {
  let answer = 1;
  let max = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] > max) {
      max = input[i];
      answer++;
    }
  }

  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));