const solution = (input) => {
  const lower = input.toLowerCase();
  const newInput = lower.replace(/[^a-z]/g, '');
  const splitted = newInput.split('');
  const reversed = splitted.reverse().join('');

  if (newInput !== reversed) return false;

  return true;
}

const input = "found7, time: study; Yduts; emit, 7Dnuof";
const result = solution(input);
console.log(result);
