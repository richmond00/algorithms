const intersect = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    const num1 = nums1[p1];
    const num2 = nums2[p2];

    if (num1 === num2) {
      answer.push(num1);
      p1++;
      p2++;
    } else if (num1 < num2) {
      p1++;
    } else if (num1 > num2) {
      p2++;
    }
  }
  console.log(answer);
  
  return answer;
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

intersect(nums1, nums2);