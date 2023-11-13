/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 1. removing all non-alphanumeric characters
  var alphanumeric = s.replaceAll(/[^a-zA-Z0-9]/g, "");

  // 2. uppcercase to lowercase
  var strArr = alphanumeric.split("");
  var lowercases = strArr.map((char) => char.toLowerCase());

  // 3. check forward and backward; compare two characters by 2/length - 1
  var indexBy = lowercases.length / 2 - 1;
  for (var i = 0; i <= indexBy; i++) {
    var isMatching = lowercases[i] === lowercases[lowercases.length - 1 - i];
    if (!isMatching) {
      return false;
    }
  }

  return true;
};
