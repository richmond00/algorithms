/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (strArr, left, right) {
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

var validPalindrome = function (s) {
  const lowercase = s.toLowerCase();
  const alphanumeric = lowercase.replaceAll(/[^a-z0-9]/g, "");
  const strArr = alphanumeric.split("");

  let left = 0;
  let right = strArr.length - 1;

  while (left < right) {
    const isMatching = strArr[left] === strArr[right];

    if (!isMatching) {
      const removeLeftChar = isPalindrome(strArr, left + 1, right);
      const removeRightChar = isPalindrome(strArr, left, right - 1);

      return removeLeftChar || removeRightChar;
    }

    left++;
    right--;
  }

  return true;
};
