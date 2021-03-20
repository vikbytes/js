function ifPalindrome(str) {
  let newStr = str.toLowerCase();
  let regexp = /[^A-Za-z0-9]/g;
  newStr = newStr.replace(regexp, "");
  console.log(newStr);

  let revStr = newStr.split("").reverse().join("");
  console.log(revStr);
  if (newStr == revStr) {
    return true;
  } else {
    return false;
  }
}

ifPalindrome("eye");
ifPalindrome("A man, a plan, a canal. Panama");
