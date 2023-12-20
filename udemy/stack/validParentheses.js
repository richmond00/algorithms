var mapBracket = {
  "(": ")",
  "{": "}",
  "[": "]",
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (mapBracket[char]) {
      stack.push(char);
    } else {
      const leftBracket = stack.pop();
      if (char !== mapBracket[leftBracket]) {
        return false;
      }
    }
  }

  if (stack.length > 0) return false;

  return true;
};
