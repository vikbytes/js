function smallestCommons(arr) {
  let upperBound = 0;
  let lowerBound = 0;
  let result = 0;
  // Set up the upper and lower bound
  if (arr[0] > arr[1]) {
    upperBound = arr[0];
    lowerBound = arr[1];
  } else {
    upperBound = arr[1];
    lowerBound = arr[0];
  }
  // Go through and reduce all the numbers to their prime factors and then keep all the prime factors needed to respresent all the numbers and the multiply them all together for the answer and put it in the result variable.
  let range = [];
  // Construct the array of numbers
  for(let i = lowerBound; i <= upperBound; i++) {
    range.push(i);
  }
  
  let factorArray = [];
  for(let i = 0; i < range.length; i++) {
    factorArray.push(primeFactors(range[i]));
  }
  console.log("FACTOR ARRAY");
  console.log(factorArray);

  let sievedArray = [];
  sievedArray = primeSieve(factorArray);
  console.log("SIEVED ARRAY");
  console.log(sievedArray);
  
  result = sumPrimes(sievedArray);
  return result;
}

function sumPrimes(array) {
  let result = 1;
  for(let i = 0; i < array.length; i++) {
    result = result*(Math.pow(array[i][0],array[i][1]));
  }
  console.log("RESULT OF PRIME MULTIPLICATIONS");
  console.log(result);
  return result;
}

function primeSieve(array) {
  let sievedFactors = [];
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j += 2) {
      let index = findEntry(sievedFactors, array[i][j]);
      if(index >= 0) {
      if(sievedFactors[index][1] < array[i][j+1]) {
        sievedFactors[index][1] = array[i][j+1];
      }
      }
      else {
      sievedFactors.push([array[i][j], array[i][j+1]]);
    }
    
    }
    
  }
  return sievedFactors;
}

// Return the index of the array that holds entry
// Returns -1 if not found
function findEntry(array, entry) {
  for(let i = 0; i < array.length; i++) {
    if(array[i][0] == entry) {
      return i;
    }
  }
  return -1;
}

function primeFactors(num) {
  let start = 2;
  let number = num;
  let factors = [];
  if(number == 1) {
    return [1,1]
  }
  while(number > 1) {
    if(number % start == 0) {
      let counter = 0;
      while(number % start == 0) {
        counter++;
        number /= start;
      }
      factors.push(start, counter);
    }
    start += 1;
  }
  return factors;
}

console.log(smallestCommons([23, 18]));