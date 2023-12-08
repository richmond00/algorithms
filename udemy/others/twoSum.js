var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const numberToFind = target - value;

    if (map.has(numberToFind)) {
      return [map.get(numberToFind), i];
    } else {
      map.set(value, i);
    }
  }

  return [];
};
