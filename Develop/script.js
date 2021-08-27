// Test Scripts

// window.alert('js is working');

// var promptOne = function() {
//   window.alert("this is prompt number one.");
// };

var btnWorking = function() {
  window.alert("this button is working");
};

var checkValue = function() {
  // window.alert(passLength + " " + passLower + " " + passUpper + " " + passNumeric + " and " + passSpecial);
  window.alert(arraySpecial[9]);
};

// Button References

var btnGen = document.querySelector('#generate');

var btnPrompt = document.querySelector('#prompt')
var btnCheck = document.querySelector('#check');

var passLength =  localStorage.getItem("length");
var passLower =   localStorage.getItem("lowercase");
var passUpper =   localStorage.getItem("uppercase");
var passNumeric = localStorage.getItem("numeric");
var passSpecial = localStorage.getItem("special");

// Arrays

var arrayLower =    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var arrayUpper =    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var arrayNumeric =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var arraySpecial =  ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', '{', ']', '}', '|', ';', ':', ',', '<', '.', '>', '/', '?', '`', '~'];

// Assignment code here

var promptStart = function() {

    // Call promptOne to begin prompt cycle.
  promptOne();

  // Prompt 1: How many characters in password? (between 8-128)
  function promptOne() {
      // Prompt the user with the first question.
    var length = prompt('How many characters would you like your password to be? Please select a value between 8 and 128.');
      // If user inputs a value inside range 8-128, then do the following:
    if (length >= 8 && length <= 128) {
      // Alert them the length or their password.
      alert('Your password will be ' + length + ' characters in length.');
      // Store the value of their length in local storage with key "length".
      localStorage.setItem("length", length);
      // Call the function "promptTwo" to continue the prompt cycle.
      promptTwo();
      // If they input a value outside range 8-128, then do the following:
    } else {
      // alert user to input a value inside ranage.
      alert('Please input a number between 8 and 128.');
      // Re-call the function "promptOne" and have the user try again.
      promptOne();
    }
  }

    // Prompt 2: Include lowercase characters?
  function promptTwo() {
    var lower = confirm('Would you like your password to include lowercase characters?');

    if (lower === true) {
      alert('Your password WILL contain lowercase characters.');
      localStorage.setItem("lowercase", true);

    } else {
      alert('Your password will NOT contain lowercase characters.');
      localStorage.setItem("lowercase", false);
    }
    promptThree();
  }

    // Prompt 3: Include uppercase characters?
  function promptThree() {
    var upper = confirm('Would you like your password to include uppercase characters?');
    
    if (upper === true) {
      alert('Your password WILL contain uppercase characters.');
      localStorage.setItem("uppercase", true);
    } else {
      alert('Your password will NOT contain uppercase characters.');
      localStorage.setItem("uppercase", false);
    }
    promptFour();
  }
    // Prompt 4: Include numeric characters?
  function promptFour() {
    var numeric = confirm('Would you like your password to include numeric characters?');
      if (numeric === true) {
        alert('Your password WILL contain numeric characters.');
        localStorage.setItem("numeric", true);
      } else {
        alert('Your password will NOT contain numeric characters.');
        localStorage.setItem("numeric", false);
      }
      promptFive();
  }
    // Prompt 5: Include special characters?
  function promptFive() {
    var special = confirm('Would you like your password to include special characters?');
    
    if (special === true) {
      alert('Your password WILL contain special characters.');
      localStorage.setItem("special", true);
    } else {
      alert('Your password will NOT contain special characters.');
      localStorage.setItem("special", false);
    }
    noGo();
  }
    // Prompt noGo: This prompt checks if the user inputed enough information to generate a random password.
  function noGo() {

    // alert('this is the noGo function');
    // alert(passLength + " " + passLower + " " + passUpper + " " + passNumeric + " and " + passSpecial);
    
    if (
      // passLower === "false" &&
      // passUpper === "false" &&
      // passNumeric === "false" &&
      // passSpecial === "false"
      localStorage.getItem("lowercase") === "false" &&
      localStorage.getItem("uppercase") === "false" &&
      localStorage.getItem("numeric") === "false" &&
      localStorage.getItem("special") === "false"
      ) {
      alert("Not enough information to generate a password. Return to prompt 1 and try again.");
      promptOne();
    } else {
      alert('All password criteria inputed correctly. Click Generate Password button to generate your secure password!');
    }
  }
};


  // Write password to the #password input

  function writePassword() {

    var password = generatePassword();


    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listeners

  btnGen.addEventListener("click", writePassword);
  
  btnPrompt.addEventListener("click", promptStart);
  btnCheck.addEventListener("click", checkValue);
