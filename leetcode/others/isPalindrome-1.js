/**
 * @param {string} s
 * @return {boolean}
 */

/*
* 1. make string alphanumeric
* 2. make string with lowercases
* aabaa
* aabbaa
* 3.
*
* */
var isPalindrome = function (s) {
  var result = true;
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  var left = 0;
  var right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      result = false;
      break;
    }
    left++;
    right--;
  }

  return result;
};

// var input = "0P";
var input = "A man, a plan, a canal: Panama";
// var input = "race a car";
// var input = " ";
const result = isPalindrome(input);
console.log("result", result);
