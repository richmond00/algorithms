const array = [1,3,3,5,5,5,8,9,];
const targetToFind = 5;

function binarySearch(nums, left, right, target) {
  while (left <= right) {
    const mid = Math.floow((left + right) / 2);
    const foundVal = nums[mid];
    
    if (foundVal === target) return mid;
    else if (foundVal < target) left = mid + 1;
    else right = mid - 1; 
  }
  return -1;
}

function searchRange(nums, target) {
  if (nums.length < 1) return [-1, -1];

  const firstPos = binarySearch(nums, 0, nums.length - 1, target);

  let endPos = firstPos;
  let startPos = firstPos;
  let temp1;
  let temp2;

  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }
  startPos = temp1;

  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, startPos + 1, nums.length - 1, target);
  }
  endPos = temp2;
}