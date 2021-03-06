import { alphabet, symbols } from './data.js'

// import data 



var generatePassword = function () {

  // Declared variabls
  var criteria = window.prompt("Which criteria would you like to include in your password? Type 'SPECIAL CHARACTERS', 'UPPERCASE', 'LOWERCASE', 'NUMERIC' ").toLowerCase();
  var length = parseInt(window.prompt("Choose a length for your password between 8 characters and 128."));
  var randomNumber = Math.floor(Math.random() * 90 + 10)
  var randomSymbol = symbols[Math.floor(Math.random() * symbols.length - 1)]
  console.log(length, criteria, randomSymbol)

  // Verify Length is between 8 and 128
  if (length < 8) {
    window.alert("Length must be greater than 8 characters!");
    generatePassword();
  } else if (length > 128) {
    window.alert("Length must be lower than 128 characters!");
    generatePassword();
  }

  //generate random alphabet string off of user input lenght
  let password = "";
  for (let i = 0; i < length; i++) {
    var isLetter = Math.random() > .5;
    if (isLetter) {
      var randomLetter = alphabet[Math.floor(Math.random() * 25)]
      console.log(randomLetter, "random letter");
      password = password + randomLetter;
    } else {
      var randomSymbol = symbols[Math.floor(Math.random() * 5)]
      console.log(randomSymbol, "random symbol");
      password = password + randomSymbol;
    } console.log(password, "password inside for loop");
  }
  console.log(password, "password when finished");


  // if numeric add number to password 
  if (criteria.includes("numeric")) {
    //then add numbers to end of random password
    var shortpass = password.substring(0, password.length - 2);
    password = shortpass + randomNumber;
  }

  // if special charachter include a random special character
  if (criteria.includes("special characters")) {
    var shortpass = password.substring(0, password.length - 1);
    password = shortpass + randomSymbol;
  }

  // if uppercase return uppercase password
  if (criteria.includes("uppercase")) {
    return password.toUpperCase();
  }

  //if lowercase, lowercase is default from data.js and will by default return lowercase
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
