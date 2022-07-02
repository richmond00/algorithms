const compareMaps = (map1, map2) => {
  if (map1.size !== map2.size) {
    return false;
  }

  for (let [key, value] of map1) {
    if (map2.get(key) !== value) {
      return false;
    }
  }

  return true;
}

const solution = (str1, str2) => {
  const length = str2.length;
  const strArr = str1.split("");
  let answer = 0;
  let map1 = new Map();
  let map2 = new Map();
  let left = 0;

  for (let i = 0; i < length - 1; i++) {
    const char = str1[i];
    if (map1.has(char)) {
      map1.set(char, map1.get(char) + 1);
    } else {
      map1.set(char, 1);
    }
  }

  for (let char of str2) {
    if (map2.has(char)) {
      map2.set(char, map2.get(char) + 1);
    } else {
      map2.set(char, 1);
    }
  }

  for (let right = length - 1; right < strArr.length; right++) {
    const char = strArr[right];
    const leftChar = strArr[left];

    if (map1.has(char)) {
      map1.set(char, map1.get(char) + 1);
    } else {
      map1.set(char, 1);
    }

    if (compareMaps(map1, map2)) {
      answer++;
    };

    map1.set(leftChar, map1.get(leftChar) - 1);
    if (map1.get(leftChar) === 0) {
      map1.delete(leftChar);
    }
    left++;
  }




  return answer;
}

const result = solution("bacaAacba",  "abc");
console.log(result);