// avgValue of the arguments
const avg = (...args) => args.reduce((a, b) => a + b) / args.length;

// foreach
// longhand
for (var i = 0; i < testData.length; i++) {}
// shorthand
for (let i in testData) {
}
//or
for (let i of testData) {
}

// if a device is an apple device
const ifApple = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

// multiple conditions
// longhand
if (x === "abc" || x === "def" || x === "ghi") {
  //
}
//  shorthand
if (["abc", "def", "ghi"].includes(x)) {
  //
}

// if a day is a weekday
const isWeekday = (date) => date.getDay() % 6 !== 0;

// if even
const isEven = (num) => num % 2 === 0;

// generate a random boolean value
const randomBoolean = () => Math.random() >= 0.5;

// reverse a string
const reverse = (str) => str.split("").reverse().join("");

// go to top of window
const goToTop = () => window.scrollTo(0, 0);
