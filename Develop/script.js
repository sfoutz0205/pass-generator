function generatePassword() {
    charLength = prompt("How many characters would you like your password to be? Choose between 8 and 128.");

     if (!charLength) {
        alert("This needs a value");
        generatePassword();

    } else if (charLength < 8 || charLength > 128) {
        alert("You must choose between 8 and 128");
        generatePassword();

    } else {
        confirmNumber = confirm("Should your password contain numbers?");
        confirmCharacter = confirm("Should your password contain special characters?");
        confirmUppercase = confirm("Should your password contain UPPERCASE letters?");
        confirmLowercase = confirm("Should your password contain lowercase letters?");
    };
};


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