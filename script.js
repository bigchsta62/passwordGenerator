// # 03 JavaScript: Password Generator

// Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

// If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

// ## User Story

// ```
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

// The following image demonstrates the application functionality:

// ![password generator demo](./Assets/03-javascript-homework-demo.png)

// ## Review

// You are required to submit the following for review:

// * The URL of the deployed application.

// * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

// - - -
// © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.


// Assignment Code
const generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const nums = "123456789";
const sChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// const pwdLength = '';

let randomPwd = [];
let pwdInput = [];

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
function createPwd() {
  const pwdLength = prompt ("How many character would you like your password to be?");
  
  // while (pwdLength < 8 || pwdLength > 128) {
  //   alert ("Your password must be between 8 and 128 characters");
  //   const pwdLength = (prompt ("How many character would you like your password to be?"));
  // }

  const upperCase = confirm ('Would you like Uppercase letters in your password?');
  const lowerCase = confirm ('Would you like Lowercase letters in your password?');
  const numbers = confirm ('Would you like Numbers in your password?');
  const specialChar = confirm ('Would you like Uppercase letters in your password?');

if (upperCase) {
  randomPwd = randomPwd.concat(uCase.split(''));
  // console.log(randomPwd);
}
if (lowerCase) {
  randomPwd = randomPwd.concat(lCase.split(''));
  // console.log(randomPwd);
}
if (numbers) {
  randomPwd = randomPwd.concat(nums.split(''));
  // console.log(randomPwd);
}
if (specialChar) {
  randomPwd = randomPwd.concat(sChar.split(''));
  // console.log(randomPwd);
}

for (let i = 0; i < pwdLength; i++) {
  pwdInput.push(randomPwd[Math.floor(Math.random() * randomPwd.length)]);
  
}
return pwdInput.join('');

}

function writePassword() {
  const password = createPwd();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
  alert('here is your password' + ' ' + password)



