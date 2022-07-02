const solution = (num) => {
  let answer = "";

  const recursive = (num) => {
    if (num === 0) {
      return;
    } else {
      recursive(Math.floor(num / 2));
      answer += String(num % 2);
    }
  }

  recursive(num);

  return answer;
}
    
const result = solution(11);
console.log(result);