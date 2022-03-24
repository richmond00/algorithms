const firstUniqChar = (s) => {
  const splitted = s.split("");

  const obj = splitted.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }

    return acc;
  }, {});

  const firstUniqCharFound = Object.keys(obj).find((key) => obj[key] === 1);
  const answer = splitted.findIndex((char) => char === firstUniqCharFound);
  
  return answer;
}

firstUniqChar("dddccdbba");