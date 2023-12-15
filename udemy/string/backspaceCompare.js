var getTyped = function (s) {
  const sArr = s.split("");
  const typed = [];

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "#") {
      typed.pop();
    } else {
      typed.push(sArr[i]);
    }
  }

  return typed.join("");
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const sTyped = getTyped(s);
  const tTyped = getTyped(t);

  return sTyped === tTyped;
};
