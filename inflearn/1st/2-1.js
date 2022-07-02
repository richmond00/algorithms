const solution = (input) => {
  let answer = [];
  answer.push(input[0]);

  for (let i = 1; i < input.length; i++) {
    const isCurrentNumberLarger = input[i - 1] < input[i];

    if (isCurrentNumberLarger) {
      answer.push(input[i]);
    }
  }

  return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12]));