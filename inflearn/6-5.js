const solution = (str) => {
  let answer = 0;
  let stack = [];
  let splitted = str.split('');

  for (let i = 0; i < splitted.length; i++) {
    const char = splitted[i];
    const prevChar = splitted[i - 1];

    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      stack.pop();
      if (prevChar === "(") {
          answer += stack.length;
      } else if (prevChar === ")") {
        answer += 1;
      }
    }
  }

  return answer;
}

const str = "()(((()())(())()))(())";
const result = solution(str);
console.log(result);