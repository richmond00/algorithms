var countPrimes = function (n) {
  let primes = Array(n).fill(true);

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (primes[i] === true) {
      for (let j = 2; j * i < n; j++) {
        primes[j * i] = false;
      }
    }
  }

  const answer = primes.filter((prime) => prime);

  return answer.length;
};
