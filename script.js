let characterLength = 8;
let choiceArr = [];

let specialCharArr =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
let uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",] ;
let lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
let numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]



// Assignment Code
let generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword)

// Write password to the #password input
function writePassword() {

  let correctInfo = getInfo();
  var passwordText = document.querySelector("#password");
  if (correctInfo) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = ""
  }
}

function generatePassword() {
  let password = ""
  for (var i =0; i < characterLength; i++) {
    let randomLetter = Math.floor(Math.random() *choiceArr.length);
    password = password +choiceArr[randomLetter];
  }
  return password;
}

//Prompting functions
function getInfo() {
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters for password? Must be between 8 and 128"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("character length has to be number between 8 and 128. ");
    return false;
  }
 
 if (confirm("Lowercase Letters?")) {
  choiceArr = choiceArr.concat(lowercaseArr);
 }

 if (confirm("Uppercase Letters?")) {
  choiceArr = choiceArr.concat(uppercaseArr);
 }

 if (confirm("Do you want numbers?")) {
  choiceArr = choiceArr.concat(numberArr);
 }

 if (confirm("Do you want special characters?")) {
  choiceArr = choiceArr.concat(specialCharArr);
}
return true;
}