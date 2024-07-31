// const array = [1, 3, 3, 5, 5, 5, 8, 9];
const arr = [1,2,3,4,5,6,8];
const targetToFind = 7;

function binarySearch(arr, start, end) {
  if (start > end) return -1;
  
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === targetToFind) {
    return mid;
  } else if (arr[mid] > targetToFind) {
    return binarySearch(arr, start, mid - 1);
  } else if (arr[mid] < targetToFind) {
    return binarySearch(arr, mid + 1, end);
  }

  return -1;
}

console.log(binarySearch(arr, 0, arr.length - 1, 5))