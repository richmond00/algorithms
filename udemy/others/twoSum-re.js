/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length === 0) {
    return [];
  }

  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const numToFind = target - nums[i];

    if (map.get(numToFind) !== undefined) {
      // this could be map.has(numToFind)
      return [i, map.get(numToFind)];
    } else {
      map.set(nums[i], i);
    }
  }

  return [];
};
