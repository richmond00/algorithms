const solution = (num, k) => {
  let answer = 0;
  let queue = Array.from({ length: num }, (_, index) => index + 1);

  while (queue.length) {
    for (let i = 0; i < k - 1; i++) {
      const shifted = queue.shift();
      queue.push(shifted);
    }
    queue.shift();

    if (queue.length === 1) {
      answer = queue.shift();
    }
  }

  return answer;
}

const result = solution(8, 3);
console.log(result);