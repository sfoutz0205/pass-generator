// define criteria
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// generate password function
function generatePassword() {
    var choices = [];
    var passwordOutput = "";
    
    // prompt user for password length
    var charLength = prompt("How many characters would you like your password to be? Choose between 8 and 128.");

     if (!charLength) {
        alert("This needs a value");
        generatePassword();

    } else if (charLength < 8 || charLength > 128) {
        alert("You must choose between 8 and 128");
        generatePassword();

    // prompt user for password criteria
    } else {
        alert("Your password will contain " + charLength + " characters");
        if(confirm("Should your password contain numbers? Click OK for yes and Cancel for no.")){
            Array.prototype.push.apply(choices, numbers);
        }
        
        if(confirm("Should your password contain special characters? Click OK for yes and Cancel for no.")) {
            Array.prototype.push.apply(choices, characters);
        }

        if(confirm("Should your password contain UPPERCASE letters? Click OK for yes and Cancel for no.")) {
            Array.prototype.push.apply(choices, alphaUpper);
        }
        
        if(confirm("Should your password contain lowercase letters? Click OK for yes and Cancel for no.")) {
            Array.prototype.push.apply(choices, alphaLower);
        }
        
        //require user to complete criteria requirement
        if(choices.length === 0) {
            alert("You must answer yes to at least one criteria prompt. Please try again.")
            generatePassword()
        }
        
        // generate random password based on criteria
        else {
            for(var i=0; i<charLength; i++){
                var random = Math.floor(Math.random()*choices.length);
                passwordOutput += choices[random];
                console.log(passwordOutput);
        }
    }
    }
    return passwordOutput;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  alert("Here is a password that meets all specified criteria");
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



