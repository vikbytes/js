function reverseArray(array) {
  let newArray = [];
  for (let x = 0; x < array.length; x++) {
    newArray.unshift(array[x]);
  }
  return newArray;
}

function arrayToList(array) {
  let reversedArray = reverseArray(array);
  let newList = null;
  for (let x = 0; x < array.length; x++) {
    newList = { value: reversedArray[x], rest: newList };
  }
  return newList;
}

function prepend(element, list) {
  return (list = { value: element, rest: list });
}

function listToArray(list) {
  let newArray = [];
  for (let node = list; node; node = node.rest) {
    newArray.push(node.value);
  }
  return newArray;
}

function nth(list, number) {
  console.log(list);
  if (list == null) {
    console.log("reached null");
    return undefined;
  } else if (number == 0) {
    console.log("reached value");
    return list.value;
  } else {
    return nth(list.rest, number - 1);
  }
}

listToPlayWith = arrayToList([10, 20, 30]);
console.log(nth(listToPlayWith, 1));
