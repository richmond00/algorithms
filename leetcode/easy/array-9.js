const twoSum = (nums, target) => {
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        [answer[0], answer[[1]]] = [i, j];
      }
    }
  }
  
  return answer;
}

twoSum([2, 7, 11, 15], 9);