const solution = (budget, input) => {
  let students = 0;
  const length = input.length;
  input.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
  
  for (let i = 0; i < length; i++) {
    let tempStudents = 1;
    const el = input[i];
    const discounted = el[0] * .5 + el[1];
    let tempBudget = budget - discounted;
    
    for (let j = 0; j < length; j++) {
      if (i === j) {
        continue;
      }

      const el = input[j];
      const price = el[0] + el[1];

      if (tempBudget - price >= 0) {
        tempStudents++;
        tempBudget -= price;
      }
    }

    students = Math.max(students, tempStudents);
  }

  return students;
}

const input = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
const result = solution(28, input);
console.log(result);