const solution = (input) => {
  const length = input.length;
  let rank = [1, 1, 1, 1, 1];
  
  for (let i = 0; i < length; i++) {
    const currentEl = input[i];
    for (let j = 0; j < length; j++) {
      if (currentEl < input[j]) {
        rank[i]++;
      }
     
    }
  }

  return rank;
}

const result = solution([87, 89, 92, 100, 76]);
console.log(result);