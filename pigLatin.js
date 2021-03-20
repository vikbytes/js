function pigLatin(str) {
  let newStr = "";
  let startOfString = "";
  let consonant = /[^aeiou]/;
  let vowel = /[aeiou]/g;
  //If the word begins with a vowel, add "way"
  //to the end and return the result!
  if (vowel.test(str[0])) {
    return str + "way";
  }
  //If the word has a vowel in it, we need to process the word
  if (vowel.test(str)) {
    let beginningProcessed = false;
    for (let i = 0; i < str.length; i++) {
      if (consonant.test(str[i]) && beginningProcessed == false) {
        startOfString += str[i];
      } else {
        beginningProcessed = true;
        newStr += str[i];
      }
    }
    return newStr + startOfString + "ay";
  } else {
    //If the word doesn't have a vowel in it, just append ay to the string and return it
    return str + "ay";
  }
}

console.log(pigLatin("consonant"));
