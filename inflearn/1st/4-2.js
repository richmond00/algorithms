const isPrime = (num) => {
  if (num === 1) {
    return false;
  }

  const sqrt = Math.sqrt(num);

  for (let i = 2; i < Math.floor(sqrt); i++) {
    if (num % i === 0) {
      return false;
    } 
  }

  return true;
}

const solution = (input) => {
  let primes = [];
 
  for (let i = 0; i < input.length; i++) {
    let reversed = "";
    let inputEl = input[i];

    while (inputEl !== 0) {
      reversed += inputEl % 10;
      inputEl = Math.floor(inputEl / 10);
    }

    reversed = Number(reversed);

    if (isPrime(reversed)) {
      primes.push(reversed);
    }
  }



  return primes;
}

const input = [32, 55, 62, 20, 250, 370, 200, 30, 100];
const result = solution(input);
console.log(result);