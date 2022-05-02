/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;
  let answer = [];

  while (p1 < nums1.length && p2 < nums2.length) {
    const n1 = nums1[p1];
    const n2 = nums2[p2];
    if (n1 === n2) {
      answer.push(n1);
      p1++;
      p2++;
    } else if (n1 > n2) {
      p2++;
    } else if (n1 < n2) {
      p1++;
    }
  }
  return answer;
};
