
/*
#problem
if s and t are equal, then return true
if string has #, then it functions as backspace

#solution
1. make strings into array; a,b,#,#

2. traverse array ==> reduce with []
1) check if it's #
2) if #, remove the last character of the string
3) if not, sum the current character to the string

3. compare two sums
 */

var strArrToResult = function (acc, curr) {
  const isHash = curr === '#';

  if (isHash) {
    const previousChar = acc[acc.length - 1];
    acc = acc.replace(previousChar, '');
  } else {
    acc += String(curr);
  }

  return acc;
}

var backspaceCompare = function(s, t) {
  const sArr = s.split('');
  const tArr = t.split('');

  const sResult = sArr.reduce(strArrToResult, '');
  const tResult = tArr.reduce(strArrToResult, '');

  return sResult === tResult;
};

// const result = backspaceCompare("ab#c", "ad#c");
// const result = backspaceCompare("ab##", "c#d#");
const result = backspaceCompare("a#c", "b");

console.log('Result', result);

