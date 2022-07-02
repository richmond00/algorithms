const solution = (str) => {
  let answer = "";
  let stack = [];

  for (let char of str) {
    if (char !== ")") {
      stack.push(char);
    } else {
      while (stack.pop() !== "(") {}
    }
  }
  answer = stack.join("");

  return answer;
}

const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
const result = solution(str);
console.log(result);