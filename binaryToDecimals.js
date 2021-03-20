function binaryAgent(str) {
  let result = "";

  let binaryNumbers = str.split(" ");  
  for(let i = 0; i < binaryNumbers.length; i++) {
    result += String.fromCharCode(binaryToDecimal(binaryNumbers[i]));
  }

  return result;
}

function binaryToDecimal(string) {
  return parseInt(string, 2);
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
