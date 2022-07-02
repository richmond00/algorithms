const solution = (arr1, arr2) => {
  const length1 = arr1.length;
  const length2 = arr2.length;
  let answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < length1 && p2 < length2) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]);
    } else {
      answer.push(arr2[p2++]);
    }
  }

  while (p1 < length1) {
    answer.push(arr1[p1++]);
  }
  while (p2 < length2) {
    answer.push(arr2[p2++]);
  }

  return answer;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
const result = solution(arr1, arr2);
console.log(result);