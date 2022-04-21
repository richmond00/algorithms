/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  const x = Math.log(n) / Math.log(3);
  const error = Math.abs(x - Math.round(x));

  return error < 1e-10;
};
