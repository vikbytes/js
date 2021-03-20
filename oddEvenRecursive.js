function oddEven(a) {
  if (a == 0) {
    console.log("Even");
  } else if (a == 1) {
    console.log("Odd");
  } else if (a < 0) {
    console.log("Negative number.");
  } else {
    oddEven(a - 2);
  }
}

oddEven(73);
