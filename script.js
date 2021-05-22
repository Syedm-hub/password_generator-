// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  let useLowerCase=confirm("Do you want to include lowercase characters?");
  let useUpperCase=confirm("Do you want to include uppercase characters?");
  let useNumeric=confirm("Do you want to include numeric characters?");
  let useSpecial=confirm("Do you want to include special characters?");
  let passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
