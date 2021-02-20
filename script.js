/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/

//An object containing arrays of all possible characters in the password
const characterTypes = {
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  number: [0,1, 2, 3, 4, 5, 6, 7, 8, 9],
  special: [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.',
   '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'],
}
/* prompt window- input must be a number. must be between 8 and 128 'How many characters in your password?'
if not a number 'You must enter a number between 8 and 128*/

/* window.confirm for each character type. must be nested in number prompt. and each type confirm nested
in the previous one. maybe all in a do while loop */ 

/*IF user selects only one character category {Math.floor(Math.random(categoryX.length))}
otherwise use  category1.concat(category2.concat(category3.concat(category4) and then 
random number method on resulting array*/


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  //This decides the length of the password
  let passLength
  do {
  passLength = window.prompt('Choose a length for your password between 8 and 128');
  } while (passLength < 8 || passLength > 128) 
  //This decides what types of characters the password will include

  let finalPasswordString = '';

do {
    if (window.confirm('Do you want to include lowercase characters in your password?')) {
      finalPasswordString += characterTypes.lowerCase;
    }
    if (window.confirm('Do you want to include uppercase characters in your password?')) {
      finalPasswordString += characterTypes.upperCase;
    }
    if (window.confirm('Do you want to include numbers in your password?')) {
      finalPasswordString += characterTypes.number;
    }
    if (window.confirm('Do you want to include special characters in your password?')) {
      finalPasswordString += characterTypes.special;
    }
  } while (finalPasswordString == '') 
 


  //This turns the string you just got back into an array
  let finalPasswordArray = finalPasswordString.split('')

  // Adding the actual random character to the password string
  for (i = 0; i <= passLength ; i ++) {
    password += finalPasswordArray[Math.floor(Math.random()*finalPasswordArray.length)]
  }
}