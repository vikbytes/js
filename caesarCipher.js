let regex = /[A-Z]/;

var keys = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
};

function rot13(str) {
  // LBH QVQ VG!
  let decryptedString = "";
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      decryptedString += keys[str[i]];
    } else {
      decryptedString += str[i];
    }
  }
  return decryptedString;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
