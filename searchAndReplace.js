function myReplace(str, before, after) {
  let words = str.split(" ");
  let result = "";
  for(let i = 0; i < words.length; i++) {
    if(words[i].toLowerCase() == before.toLowerCase()) {
      let regexp = /^[A-Z]/g;
      if (regexp.test(words[i])) {
        result += toCapitalCase(after);
      } else {
        result += after;
      }
    } else {
      result += words[i];
    } 
    if(i == words.length-1) {

    } else {
      result += " ";
    }
  }
  console.log(result);
  return result;
}

function toCapitalCase(str) {
  let result = "";
  let array = str.split("");
  result += array[0].toUpperCase();
  for(let i = 1; i < str.length; i++) {
    result += array[i];
  }
  return result;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("His name is Tom", "Tom", "john");