/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length === 0) {
    return [];
  }

  for (let i = 0; i < nums.length; i++) {
    const numToFind = target - nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === numToFind) {
        return [i, j];
      }
    }
  }

  return [];
};
