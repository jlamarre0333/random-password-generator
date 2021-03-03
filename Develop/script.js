import words from './data.js'

// Assignment code here

var generatePassword = function() {
  var criteria = window.prompt("Which criteria would you like to include in your password? Type 'SPECIAL CHARACTERS', 'UPPERCASE', 'LOWERCASE', 'NUMERIC' ");
  var length = window.prompt("Choose a length for your password between 8 characters and 128.")
  console.log(length,criteria)

  for(let i = 0; i < words.length; i++) {
    console.log(i)
  }
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
