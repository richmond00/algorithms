function array1(input, target) {
  let answer;

  for (let p1 = 0; p1 < input.length; p1++) {
    const numberToFind = target - input[p1];

    for (let p2 = p1 + 1; p2 < input.length; p2++) {
      const isEqual = numberToFind === input[p2];

      if (isEqual) {
          answer = [p1, p2];
      }
    }
  }

  return answer;
}

const result = array1([1, 3, 7, 9, 2], 11);
console.log('Result', result);

