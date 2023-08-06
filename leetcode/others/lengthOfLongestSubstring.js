/**
 * Name:
 * Longest Substring Without Repeating Characters
 * Link:
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Problem:
 * A string S is given
 * Get length of substring
 * The substring is not repeated
 * Example:
 * a b c a bcbb ==> ab: 2, abc: 3,
 * bbbb ==> b: 1
 * au => au: 2
 * pwwkew ==> pw: 2, wk: 2, wke: 3,...
 * "" ==> 0
 * " " ==> 1
 *
 * Solution:
 * 1. make string into array
 * 2. traverse array
 * 2.1 check if char is repeating
 * 2.1.1 then, reset substr to char
 * 2.1.2 not, add char to substr
 * 2.2 push substr on substrArr
 * 3. traverse substrArr
 * 3.1 get maxLength of substr
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const sArr = s.split("");
  let maxLength = 0;

  for (let i = 0; i < sArr.length; i++) {
    let substr = "";
    for (let j = i; j < sArr.length; j++) {
      const char = sArr[j];

      if (char === undefined || substr.includes(char)) {
        break;
      }
      substr += String(char);
      maxLength = Math.max(maxLength, substr.length);
    }
  }

  return maxLength;
};

// var input = "abcabcbb";
// var input = " ";
// var input = "au";
var input = "dvdf";
const result = lengthOfLongestSubstring(input);
console.log("result", result);
