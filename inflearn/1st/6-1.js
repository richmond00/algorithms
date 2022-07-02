const solution = (str) => {
  let stack = [];
  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return "NO";
      }
      stack.pop();
    }
  }

  if (stack.length > 0) {
    return "NO";
  }

  return "YES";
}

const str = "(()(()))(()"
const result = solution(str);
console.log(result);