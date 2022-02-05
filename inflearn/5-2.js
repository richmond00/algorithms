const solution = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    const el1 = arr1[p1];
    const el2 = arr2[p2];

    if (el1 === el2) {
      answer.push(el1);
      p1++;
      p2++;
    } else if (el1 < el2) {
      p1++;
    } else if (el2 < el1) {
      p2++;
    }
  }

  return answer;
}

const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];
const result = solution(arr1, arr2);
console.log(result);