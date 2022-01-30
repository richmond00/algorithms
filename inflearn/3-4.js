const solution = (str, target) => {
  let answer = [];
  let distance = 1000;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      distance = 0;
    } else {
      distance++;
    }

    answer.push(distance);
  }

  distance = 1000;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === target) {
      distance = 0;
    } else {
      distance++;
      answer[i] = Math.min(answer[i], distance);
    }
  }

  return answer;
}

const str = "teachermode";
const result = solution(str, "e");
console.log(result);
