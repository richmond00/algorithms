// https://leetcode.com/problems/valid-palindrome-ii/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let isRemoved = false;
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      if (isRemoved) {
        return false;
      }
      
      if (s[left + 1] === s[right]) {
        left++;
        isRemoved = true;
      } else if (s[left] === s[right - 1]) {
        right--;
        isRemoved = true;
      } else {
        return false;
      }

    }
    left++;
    right--;
  }

  return true;
};

// var input = "abca";
var input = "abccdba";
const result = validPalindrome(input);
console.log("result", result);
