function sumPrimes(num) {
  let result = 0;
  for(let i = 2; i <= num; i++) {
    if(isPrime(i)) {
      result += i;
    }
  }
  return result;
}

function isPrime(num) {
  let start = Math.floor(Math.sqrt(num));
  for(let i = start; i > 1; i--) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

//console.log(isPrime(6));
console.log(sumPrimes(10));
