function countChar(string, char) {
  total = 0;
  for (let x = 0; x < string.length; x = x + 1) {
    if (string[x] == char) {
      total = total + 1;
    }
  }
  return total;
}

console.log(countChar("kakkerlak", "k"));
