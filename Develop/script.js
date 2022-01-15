// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const alphabetUpper = Array.from(Array(26)).map((e, i) => i + 65);

const upperCase = alphabetUpper.map((x) => String.fromCharCode(x));

const alphabetLower = Array.from(Array(26)).map((e, i) => i + 97);

const lowerCase = alphabetLower.map((x) => String.fromCharCode(x));

const numbersInt = Array.from(Array(10).keys());

const numbers = numbersInt.map((i) => i.toString());

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

  if (!pwdLenght || pwdLenght < 8 || pwdLenght > 128) {
    return;
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

    possibleChars = possibleChars.concat(upperCase);
  }

  if (lowerConfirm) {
    var temp = Math.floor(Math.random() * lowerCase.length);
    confirmChars.push(lowerCase[temp]);

    possibleChars = possibleChars.concat(lowerCase);
  }
  if (numbersConfirm) {
    var temp = Math.floor(Math.random() * numbers.length);
    confirmChars.push(numbers[temp]);

    possibleChars = possibleChars.concat(numbers);
  }
  if (specialConfirm) {
    var temp = Math.floor(Math.random() * specialChar.length);
    confirmChars.push(specialChar[temp]);

    possibleChars = possibleChars.concat(specialChar);
  }

  for (var i = 0; i < pwdLenght; i++) {
    tempPasswod.push(
      possibleChars[Math.floor(Math.random() * possibleChars.length)]
    );
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
