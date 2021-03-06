import { alphabet, symbols } from './data.js'

const generatePassword = function () {
  // Declared variabls
  const criteria = window.prompt("Which criteria would you like to include in your password? Type 'SPECIAL CHARACTERS', 'UPPERCASE', 'LOWERCASE', 'NUMERIC' ").toLowerCase();
  const length = parseInt(window.prompt("Choose a length for your password between 8 characters and 128."));
  const randomNumber = Math.floor(Math.random() * 90 + 10);
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length - 1)];

  // Verify Length is between 8 and 128
  if (length < 8) {
    window.alert("Length must be greater than 8 characters!");
    generatePassword();
  } else if (length > 128) {
    window.alert("Length must be lower than 128 characters!");
    generatePassword();
  };

  //generate random alphabet string off of user input lenght
  let password = "";
  for (let i = 0; i < length; i++) {
    const isLetter = Math.random() > .5;
    if (isLetter) {
      const randomLetter = alphabet[Math.floor(Math.random() * 25)];
      password = password + randomLetter;
    } else {
      const randomSymbol = symbols[Math.floor(Math.random() * 5)];
      password = password + randomSymbol;
    };
  };

  // if numeric add number to password 
  if (criteria.includes("numeric")) {
    //then add numbers to end of random password
    const shortpass = password.substring(0, password.length - 2);
    password = shortpass + randomNumber;
  };

  // if special charachter include a random special character
  if (criteria.includes("special characters")) {
    const shortpass = password.substring(0, password.length - 1);
    password = shortpass + randomSymbol;
  };

  // if uppercase return uppercase password
  if (criteria.includes("uppercase")) {
    return password.toUpperCase();
  };

  //if lowercase, lowercase is default from data.js and will by default return lowercase
  return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
