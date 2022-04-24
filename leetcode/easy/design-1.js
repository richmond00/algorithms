/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums || [];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let copied = this.nums.map((num) => num);

  for (let i = copied.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [copied[randomIndex], copied[i]] = [copied[i], copied[randomIndex]];
  }

  return copied;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
