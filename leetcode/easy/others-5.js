/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const splitted = s.split("");

  for (let c of splitted) {
    const top = stack[stack.length - 1];

    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    } else if (c === ")" && top === "(") {
      stack.pop();
    } else if (c === "]" && top === "[") {
      stack.pop();
    } else if (c === "}" && top === "{") {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
