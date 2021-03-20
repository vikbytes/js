function testEveryElement(array, test) {
  for (let x of array) {
    if (test(x) == false) {
      return false;
    }
  }
  return true;
}

console.log(testEveryElement([1, 3, 5], (n) => n < 10));
console.log(testEveryElement([2, 4, 16], (n) => n < 10));
console.log(testEveryElement([], (n) => n < 10));
