const solution = (input) => {
  let gross = 0;
  let point = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 1) {
      point++;
      gross += point;
    } else {
      point = 0;
    }
  }

  return gross;
}

const result = solution([1,0,1,1,1,0,0,1,1,0]);
console.log(result);