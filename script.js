// An object containing arrays of all possible characters for the password
/*const characterTypes = {
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  number: [0,1, 2, 3, 4, 5, 6, 7, 8, 9],
  special: ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.',
   '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}', '~'],
}*/

//An object containing strings of all possible characters for the password
const characterTypes = {
  lowerCase: 'abcdefghijklmnopqurstuvwxyz',
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  special: '!#$%&()*+-./:;<=>?@[]^_{}~',
}



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
  
  // This decides the length of the password  
  let passLength = '';

  do {
    passLength = parseInt(window.prompt('Choose a length for your password between 8 and 128'));
  } while (passLength < 8 || passLength > 128)
  
  // This verifies passLength as a number that exists
  if (typeof passLength !== 'number'|| isNaN(passLength)) {
    window.alert('Try again');
    return 'whoopsie'
  }
  
  // This decides what types of characters the password will include
  let initialPasswordString = '';

  do {
    if (window.confirm('Do you want to include lowercase characters in your password?')) {
      initialPasswordString += characterTypes.lowerCase;
    }
    if (window.confirm('Do you want to include uppercase characters in your password?')) {
      initialPasswordString += characterTypes.upperCase;
    }
    if (window.confirm('Do you want to include numbers in your password?')) {
      initialPasswordString += characterTypes.number;
    }
    if (window.confirm('Do you want to include special characters in your password?')) {
      initialPasswordString += characterTypes.special;
    }
    if (initialPasswordString == '') {
      window.alert('You must choose at least one character set')
    }
  } while (initialPasswordString == '') 
  
  // This removes all commas
    //finalPasswordString = initialPasswordString.replaceAll(',', '');

  // This turns the string you just got back into an array
  let finalPasswordArray = initialPasswordString.split('')

  // Adding the actual random character to the password string
  let passwordFinal = ''
  for (let i = 0; i <= passLength -1 ; i++) {
    passwordFinal += finalPasswordArray[Math.floor(Math.random()*finalPasswordArray.length)]
  }
  return passwordFinal;
}