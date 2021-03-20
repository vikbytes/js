function dropElements(arr, func) {
  let newArray = [];
  let triggered = false;
  for (let i = 0; i < arr.length; i++) {
    if (triggered == true) {
      newArray.push(arr[i]);
    } else if (func(arr[i]) && triggered == false) {
      triggered = true;
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  })
);
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
);
