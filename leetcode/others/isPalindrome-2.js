/**
 * Name: Valid Palindrome
 * Link: https://leetcode.com/problems/valid-palindrome/
 * Problem: leave only lowercase letters, and read letters backward.
 * Those letters are the same with original letters
 * Steps:
 * 1. make string to array a, b, ;, C
 * 2. remove all characters but alphabet: a, b, C
 * 3. make uppercase letter to lowercase letter: a, b, c
 * 4. read letters backward: c, b, a
 * 5. make letters to string: cba
 * 6. check if input and 5 are the same
 * 7. if true, return true
 * 8. if false, return false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let result = false;
  var sAlphabetOnly = s.replace(/[^a-zA-Z0-9]/g, '');
  var sAlphabetOnlyArr = sAlphabetOnly.split('');
  var sLowercaseAlphabetOnly = sAlphabetOnlyArr.map((char) => char.toLowerCase());
  var forward = sLowercaseAlphabetOnly.join('');
  var backward = '';

  for (let i = sLowercaseAlphabetOnly.length - 1; i >= 0; i--) {
    backward += sLowercaseAlphabetOnly[i];
  };

  if (forward === backward) {
    result = true;
  }

  return result;
};

var input = "0P";
// var input = "A man, a plan, a canal: Panama";
// var input = "race a car";
// var input = " ";
const result = isPalindrome(input);
console.log("result", result);
