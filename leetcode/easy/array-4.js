const reverseNum = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

const rotate = (nums, k) => {
  k = k % nums.length;
  nums.reverse();

  reverseNum(nums, 0, k - 1);
  reverseNum(nums, k, nums.length - 1);
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([-1,-100,3,99], 2);