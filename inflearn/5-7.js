const solution = (str1, str2) => {
  let answer = "YES";
  let map = new Map();

  for (let char of str1) {
    if (map.has(char)) {
      const currentValue = map.get(char);
      map.set(char, currentValue + 1);
    } else {
      map.set(char , 1);
    }
  }

  for (let char of str2) {
    if (!map.has(char)) {
      return "NO";
    }
    if (map.get(char) === 0) {
      return "NO";
    }
    const currentValue = map.get(char);
    map.set(char, currentValue - 1);
  }

  return answer;
}

const result1 = solution("AbaAeCe",  "baeeACA");
const result2 = solution("abaCC", "Caaab");
console.log(result1);
console.log(result2);