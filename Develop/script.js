// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerCase = [
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

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = [
  "+",
  "-",
  "&",
  "|",
  "!",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "^",
  "~",
  "*",
  "?",
  ":",
];

function generatePassword() {
  var confirmChars = [];
  var possibleChars = [];
  var tempPasswod = [];
  var pwdLenght = parseInt(
    window.prompt("Please enter password leght between 8 and 128")
  );
  console.log(pwdLenght);

  if (pwdLenght < 8 || pwdLenght > 128) {
    generatePassword();
  }

  var upperConfirm = window.confirm(
    "Do you want uppercase letters in your password?"
  );

  var lowerConfirm = window.confirm(
    "Do you want lowercase letters in your password?"
  );

  var numbersConfirm = window.confirm("Do you want numbers in your password?");

  var specialConfirm = window.confirm(
    "Do you want special characters in your password?"
  );

  if (upperConfirm) {
    var temp = Math.floor(Math.random() * upperCase.length);
    confirmChars.push(upperCase[temp]);
    console.log(confirmChars);
    possibleChars = possibleChars.concat(upperCase);
    console.log(possibleChars);
  }

  if (lowerConfirm) {
    var temp = Math.floor(Math.random() * lowerCase.length);
    confirmChars.push(lowerCase[temp]);
    console.log(confirmChars);
    possibleChars = possibleChars.concat(lowerCase);
    console.log(possibleChars);
  }
  if (numbersConfirm) {
    var temp = Math.floor(Math.random() * numbers.length);
    confirmChars.push(numbers[temp]);
    console.log(confirmChars);
    possibleChars = possibleChars.concat(numbers);
    console.log(possibleChars);
  }
  if (specialConfirm) {
    var temp = Math.floor(Math.random() * specialChar.length);
    confirmChars.push(specialChar[temp]);
    console.log(confirmChars);
    possibleChars = possibleChars.concat(specialChar);
    console.log(possibleChars);
  }

  for (var i = 0; i < pwdLenght; i++) {
    tempPasswod.push(
      possibleChars[Math.floor(Math.random() * possibleChars.length)]
    );
    console.log(tempPasswod);
  }

  for (var i = 0; i < confirmChars.length; i++) {
    tempPasswod[i] = confirmChars[i];
  }
  return tempPasswod.join("");
}
// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
