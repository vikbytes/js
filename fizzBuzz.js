for (let x = 1; x <= 100; x = x + 1) {
  if (x % 3 == 0) {
    if (x % 5 == 0) {
      console.log("FizzBuzz");
    }
    console.log("Fizz");
  } else if (x % 5 == 0) {
    console.log("Buzz");
  }
}
