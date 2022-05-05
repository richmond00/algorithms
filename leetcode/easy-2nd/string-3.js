/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let frequency = {};
  let answer = -1;

  for (let char of s) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (frequency[char] === 1) {
      return i;
    }
  }

  return answer;
};
