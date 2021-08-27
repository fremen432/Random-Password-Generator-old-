// Test Scripts

// window.alert('js is working');

// var promptOne = function() {
//   window.alert("this is prompt number one.");
// };

var btnWorking = function() {
  window.alert("this button is working");
};

var checkValue = function() {
  window.alert("your password will be " + (
    localStorage.getItem("length") +
    " characters in length!")
    )
};

// Button References

var btnGen = document.querySelector('#generate');

var btnPrompt = document.querySelector('#prompt')
var btnCheck = document.querySelector('#check');


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
    var passLower = confirm('Would you like your password to include lowercase characters?');

    if (passLower === true) {
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
    var passUpper = confirm('Would you like your password to include uppercase characters?');
    
    if (passUpper === true) {
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
    var passNumeric = confirm('Would you like your password to include numeric characters?');
      if (passNumeric === true) {
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
    var passSpecial = confirm('Would you like your password to include special characters?');
    
    if (passSpecial === true) {
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

    if (
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




  // Get references to the #generate element

  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listeners

  // btnGen.addEventListener("click", writePassword);

  btnGen.addEventListener("click", btnWorking);
  
  btnPrompt.addEventListener("click", promptStart);
  btnCheck.addEventListener("click", checkValue);
