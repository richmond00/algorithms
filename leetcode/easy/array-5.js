const singleNumber = (nums) => {
  const obj = nums.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }

    return acc;
  }, {});
  

  const answer = Object.keys(obj).reduce((acc, key) => {
    if (obj[key] === 1) {
      acc = key;
    }
    
    return acc;
  }, -1);

  return answer;
}

const input1 = [2, 2, 1];
singleNumber(input1);