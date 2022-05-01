/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var myReverse = function (nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  k = k % nums.length;
  nums.reverse();

  myReverse(nums, 0, k - 1);
  myReverse(nums, k, nums.length - 1);

  return nums;
};
