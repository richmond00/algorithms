/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  /*
  1. Remove whitespace
  2. Decide sign using -, +
  3. Read numbers and ignore char
  4. Check range
  5. Return
  */
  let i = 0;
  let sign = 1;
  let result = 0;
  const max = 2 ** 31 - 1;
  const min = -1 * 2 ** 31;

  while (s[i] === " ") {
    i++;
  }

  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] === "+" ? 1 : -1;
    i++;
  }

  while (s[i] >= "0" && s[i] <= "9") {
    result = result * 10 + (s[i] - 0);
    i++;
  }

  if (sign === 1 && result > max) {
    return max;
  }

  if (sign === -1 && result * sign < min) {
    return min;
  }

  return result * sign;
};
