import { alphabet, symbols } from './data.js'

const generatePassword = function () {
  // Declared variabls
  const criteria = window.prompt("Which criteria would you like to include in your password? Type 'SPECIAL', 'UPPERCASE', 'LOWERCASE', 'NUMERIC' ").toLowerCase();
  const length = parseInt(window.prompt("Choose a length for your password between 8 characters and 128."));
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
    let characterType = null;
    const allChoices = criteria.split(' ');
    const randomIndex = Math.floor(Math.random() * allChoices.length);
    characterType = allChoices[randomIndex];

    //character is a letter
    if (characterType === "uppercase" || characterType === "lowercase") {
      let randomLetter = alphabet[Math.floor(Math.random() * 25)];
      if (criteria.includes("uppercase") && criteria.includes("lowercase")) {
        //randomly choose uppercase or lowercase
        if (Math.random() > .5) {
          randomLetter = randomLetter.toUpperCase();
        } else {
          randomLetter = randomLetter.toLowerCase();
        }
      } else if (criteria.includes("uppercase")) {
        randomLetter = randomLetter.toUpperCase();
      } else {
        randomLetter = randomLetter.toLowerCase();
      }
      password = password + randomLetter;
    }

    //Character is special
    if (characterType === "special") {
      const randomSymbol = symbols[Math.floor(Math.random() * 5)];
      password = password + randomSymbol;
    }

    //Character is numeric
    if (characterType === "numeric") {
      const randomNumber = Math.floor(Math.random() * 10);
      password = password + randomNumber;
    }
  };

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
