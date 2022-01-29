const solution = (input) => {
  let answer = "";
  let counter = 1;
  const newInput = input + " ";

  for (let i = 0; i < newInput.length; i++) {
    if (newInput[i] === newInput[i + 1]) {
      counter++;
    } else {
      answer += newInput[i];
      if (counter > 1) {
        answer += String(counter);
      }
      counter = 1;
    }
  }

  return answer;
}

const input = "KKHSSSSSSSE";
const result = solution(input);
console.log(result);