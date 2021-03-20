function reverseArray(array) {
  let newArray = [];
  for (let x = 0; x < array.length; x++) {
    newArray.unshift(array[x]);
  }
  return newArray;
}

console.log(reverseArray(["A", "B", "C"]));
