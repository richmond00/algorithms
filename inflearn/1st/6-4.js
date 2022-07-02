const solution = (str) => {
  let stack = [];
  
  for (let char of str) {
    if (isNaN(char)) {
      let result = 0;
      const right = stack.pop();
      const left = stack.pop();

      if (char === "+") {
        result = left + right;
      } else if (char === "-") {
        result = left - right;
      } else if (char === "*") {
        result = left * right;
      } else if (char === "/") {
        result = left / right;
      }
      
      stack.push(result);

    } else {
      stack.push(+char);
    }


  }

  return stack.pop();
}

const str = "352+*9-";
const result = solution(str);
console.log(result);