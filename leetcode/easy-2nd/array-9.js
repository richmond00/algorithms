/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    if (map.has(diff)) {
      answer[0] = i;
      answer[1] = map.get(diff);

      return answer;
    }

    map.set(num, i);
  }

  return answer;
};
