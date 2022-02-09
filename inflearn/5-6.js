const solution = (str) => {
  let map = new Map();
  let maxKey = "";
  let max = 0;

  for (char of str) {
    if (map.has(char)) {
      const currentValue = map.get(char);
      map.set(char, currentValue + 1);
    } else {
      map.set(char, 1);
    }
  }

  map.forEach((value, key) =>{
    if (max < value) {
      max = value;
      maxKey = key;
    }
  });


  return maxKey;
}

const str = "BACBACCACCBDEDE";
const result = solution(str);
console.log(result);