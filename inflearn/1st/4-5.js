const solution = (input, rank) => {
  const length = input.length;
  let set = new Set();
  let cnt = 0;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        const sum = input[i] + input[j] + input[k];
        set.add(sum);
      }
    }
  }
  
  const arr = Array.from(set);
  arr.sort((a, b) => b - a);
  
  return arr[rank - 1];  
}

const input = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
const result = solution(input, 3);
console.log(result);