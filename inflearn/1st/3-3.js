const solution = (input) => {
  let answer = "";

  for (s of input) {
    if (!isNaN(s)) {
      answer += s;
    }
  }

  return Number(answer);
}

const input = "g0en2T0s8sSoft";
const result = solution(input);
console.log(result);