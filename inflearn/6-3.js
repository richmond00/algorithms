const solution = (arr, moves) => {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    const moveIndex = moves[i] - 1;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j][moveIndex] !== 0) {
        const selected = arr[j][moveIndex];
        arr[j][moveIndex] = 0;

        if (stack[stack.length - 1] === selected) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(selected);
        }

        break;
      }
    }
  }

  return answer;
}

const arr = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
const result = solution(arr, moves);
console.log(result);