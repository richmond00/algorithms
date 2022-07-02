const solution = (input) => {
  const lowercaseInput = input.toLowerCase();
  const length = Math.floor(lowercaseInput.length);

  for (let i = 0; i < length; i++) {
    if (lowercaseInput[i] !== lowercaseInput[length - i - 1]) {
      return false;
    }
  }

  return true;
}

const input = "gooG";
const result = solution(input);
console.log(result);