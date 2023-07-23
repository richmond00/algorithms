/*
1. traverse array from 0 to length: i
ith element is height
2. traverse array from i + 1 to length: j
j - i is width
get area : height x width
if area is greater than max, then max is replaced with current area

return area
*/
function array2(input) {
  let maxArea = 0;
  let length = input.length;

  for (let i = 0; i < length; i++) {
    const iHeight = input[i]; // 1

    for (let j = i + 1; j < length; j++) {
      const jHeight = input[j];
      const height = Math.min(iHeight, jHeight);
      const width = j - i; // 1
      const area = height * width;

      if (area > maxArea) {
        maxArea = area;
      };
    }
  }

  return maxArea;
}

// const result = array2([3, 1, 5, 2]);
const result = array2([1,8,6,2,5,4,8,3,7]);
console.log('Result', result);

