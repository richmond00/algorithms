const array = [5,3,1,6,4,2,];
const kToFind = 4;

function findKthLargest(nums, k) {
  const indexToFind = nums.length - k;
  quickSort(nums, 0, nums.length - 1);

  return nums(indexToFind);
}

function quickSort(nums, left, right) {
  if (left < right) {
    const partitionIndex = getPartition(nums, left, right);

    quickSort(nums, left, partitionIndex - 1);
    quickSort(nums, partitionIndex + 1, right);
  }
}

function getPartition(nums, left, right) {
  const pivotElement = nums[right];
  let partitionIndex = left;

  for (let j = left; j < right; j++) {
    if (nums[j] <= pivotElement) {
      swap(nums, partitionIndex, j);
      partitionIndex++;
    }
  }
  swap(nums, partitionIndex, right);

  return partitionIndex;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}