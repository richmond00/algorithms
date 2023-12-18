/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const HASH = "#";
  var p1 = s.length - 1;
  var p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === HASH || t[p2] === HASH) {
      if (s[p1] === HASH) {
        let backspace = 2;
        while (backspace > 0) {
          backspace--;
          p1--;

          if (s[p1] === HASH) {
            backspace += 2;
          }
        }
      }

      if (t[p2] === HASH) {
        let backspace = 2;
        while (backspace > 0) {
          backspace--;
          p2--;

          if (t[p2] === HASH) {
            backspace += 2;
          }
        }
      }
    } else {
      if (s[p1] !== t[p2]) {
        return false;
      }
      p1--;
      p2--;
    }
  }

  return true;
};
