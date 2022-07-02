const solution = (requirement, plan) => {
  let answer = "YES";
  const queue = requirement.split("");

  for (let char of plan) {
    if (queue.includes(char)) {
      if (char !== queue.shift()) {
        answer = "NO"
      }
    }
  }

  if (queue.length > 0) {
    answer = "NO";
  }

  return answer;
}

const result = solution("CBA", "CBDAGE");
console.log(result);