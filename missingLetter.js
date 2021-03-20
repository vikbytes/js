function missingLetter(str) {
  let result = undefined;
  let found = false;
  let iterator = 0;
  while (found == false) {
    if (str[0] == letterArray[iterator]) {
      found = true;
    } else {
      iterator++;
    }
  }
  console.log(iterator);

  for (let i = 0; i < str.length; i++) {
    if (letterArray[iterator + i] == str[i]) {
      continue;
    } else {
      result = letterArray[iterator + i];
      console.log(result);
      break;
    }
  }
  console.log(result);
  return result;
}

let letterArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

missingLetter("abcdefghjklmno");
