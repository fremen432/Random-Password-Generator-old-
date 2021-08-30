// Arrays
var arrayLower =    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var arrayUpper =    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var arrayNumeric =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var arraySpecial =  ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', '{', ']', '}', '|', ';', ':', ',', '<', '.', '>', '/', '?', '`', '~'];

// Variable declarations
var btnGen = document.querySelector('#generate');

passwordAttribute = {
  charLength: 8,
  includeLower: true,
  includeUpper: true,
  includeNumeric: true,
  includeSpecial: true,
  arrayMaster: [""],
  passGenerate: "",
  reset: function(){
      this.charLength = 8,
      this.includeLower = true,
      this.includeUpper = true,
      this.includeNumeric = true,
      this.includeSpecial = true,
      this.arrayMaster = [""],
      this.passGenerate = ""
  }
  };

// Assignment code here
// Prompt 1: Character length of password (8-128)?
function promptLength() {
  var value = prompt('How many characters would you like your password to be? Please select a value between 8 and 128.');
  if (value >= 8 && value <= 128) {
      alert('Your password will be ' + value + ' characters in length.');
  } else {
      alert('Invalid number. Please input a number between 8 and 128.');
      promptLength();
  } return value;
}
// Prompt 2: Include lowercase characters?
function promptLowercase() {
  var value = confirm('Would you like your password to include lowercase characters?');
  if (value === true) {
      alert('Your password WILL contain lowercase characters.');
      passwordAttribute.arrayMaster = passwordAttribute.arrayMaster.concat(arrayLower);
  } else {
      alert('Your password will NOT contain lowercase characters.');
  } return value;
}
// Prompt 3: Include uppercase characters?
function promptUppercase() {
  var value = confirm('Would you like your password to include uppercase characters?');
  if (value === true) {
      alert('Your password WILL contain uppercase characters.');
      passwordAttribute.arrayMaster = passwordAttribute.arrayMaster.concat(arrayUpper);
  } else {
      alert('Your password will NOT contain uppercase characters.');
  } return value;
}
// Prompt 4: Include Numeric characters?
function promptNumeric() {
  var value = confirm('Would you like your password to include Numeric characters?');
  if (value === true) {
      alert('Your password WILL contain Numeric characters.');
      passwordAttribute.arrayMaster = passwordAttribute.arrayMaster.concat(arrayNumeric);

  } else {
      alert('Your password will NOT contain Numeric characters.');
  } return value;
}
// Prompt 5: Include Special characters?
function promptSpecial() {
  var value = confirm('Would you like your password to include Special characters?');
  if (value === true) {
      alert('Your password WILL contain Special characters.');
      passwordAttribute.arrayMaster = passwordAttribute.arrayMaster.concat(arraySpecial);

  } else {
      alert('Your password will NOT contain Special characters.');
  } return value;
}
// Prompt 6: If all criteria is false, loop user back through prompts.
function noGo() {
  if (
  passwordAttribute.includeLower === false &&
  passwordAttribute.includeUpper === false &&
  passwordAttribute.includeNumeric === false &&
  passwordAttribute.includeSpecial === false
  ) {
      alert("Not enough information to generate a password. Password must include at least one character type. Return to prompt 1 and try again.");
      writePassword();
    } else {
      alert('All password criteria inputed correctly. Generating your secure password...');
    }
}

// Input new values from prompt and confirm windows 
var promptStart = function(){
  passwordAttribute.charLength = promptLength();
  passwordAttribute.includeLower = promptLowercase();
  passwordAttribute.includeUpper = promptUppercase();
  passwordAttribute.includeNumeric = promptNumeric();
  passwordAttribute.includeSpecial = promptSpecial();
  noGo();
};

var randomCharPick = function (length){
  var value = Math.floor(Math.random()* length);
  return value;
};

var runScript = function(){
  passwordAttribute.reset();
  promptStart();

  for (var i = 0; i < passwordAttribute.charLength; i++) {
    var index = randomCharPick(passwordAttribute.arrayMaster.length);
    passwordAttribute.passGenerate = passwordAttribute.passGenerate.concat(passwordAttribute.arrayMaster[index]);  
  } return passwordAttribute.passGenerate
};

// Write password to the #password input
function writePassword() {
  var password = runScript();
  var passwordDisplay = document.getElementById('password');
  passwordDisplay.value = password;
}

  // Add event listeners
  btnGen.addEventListener("click", writePassword);