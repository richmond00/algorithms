/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const lowercase = s.toLowerCase();
  const alphanumeric = lowercase.replaceAll(/[^a-zA-Z0-9]/g, "");
  const strArr = alphanumeric.split("");

  let left = 0;
  let right = strArr.length - 1;

  while (left < right) {
    const isMatching = strArr[left] === strArr[right];
    if (!isMatching) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
