
// Assignment Code
const generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const nums = "123456789";
const sChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

let randomPwd = [];
let pwdInput = [];


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password

function generatePassword() {
	var pwdLength = (prompt("How many character would you like your password to be?"));

	// THEN I choose a length of at least 8 characters and no more than 128 characters
	// 'while' used instead of 'if'. This kept the minimum requirements from being bypassed.
	while (pwdLength < 8 || pwdLength > 128) {
		alert("Your password must be between 8 and 128 characters");
		var pwdLength = (prompt("How many character would you like your password to be?"));
	}

	// WHEN prompted for character types to include in the password
	// THEN I choose lowercase, uppercase, numeric, and/or special characters

	let upperCase = confirm('Would you like Uppercase letters in your password?');
	let lowerCase = confirm('Would you like Lowercase letters in your password?');
	let numbers = confirm('Would you like Numbers in your password?');
	let specialChar = confirm('Would you like Uppercase letters in your password?');

	// WHEN I answer each prompt
	// THEN my input should be validated and at least one character type should be selected

	while (upperCase === false && lowerCase === false && specialChar === false && numbers === false) {
		alert("At least one type of character must be selected");
		let upperCase = confirm('Would you like Uppercase letters in your password?');
		let lowerCase = confirm('Would you like Lowercase letters in your password?');
		let numbers = confirm('Would you like Numbers in your password?');
		let specialChar = confirm('Would you like Uppercase letters in your password?');
	}
	//If selected, includes uppercase letters in the password
	if (upperCase) {
		randomPwd = randomPwd.concat(uCase.split(''));
		// console.log(randomPwd);
	}

	//If selected, includes lowercase letters
	if (lowerCase) {
		randomPwd = randomPwd.concat(lCase.split(''));
		// console.log(randomPwd);
	}

	//If selected, includes numbers
	if (numbers) {
		randomPwd = randomPwd.concat(nums.split(''));
		// console.log(randomPwd);
	}

	//If selected, includes special characters
	if (specialChar) {
		randomPwd = randomPwd.concat(sChar.split(''));
		// console.log(randomPwd);
	}
	//pushes the selected variables, at random into pwdInput,
	//at the length of randomPwd.
	for (let i = 0; i < pwdLength; i++) {
		pwdInput.push(randomPwd[Math.floor(Math.random() * randomPwd.length)]);

	}
	// WHEN all prompts are answered
	// THEN a password is generated that matches the selected criteria
	
	return pwdInput.join('');
	// console.log(pwdInput.join(''));
	// WHEN the password is generated
	// THEN the password is either displayed in an alert or written to the page
}

function writePassword() {
	let password = generatePassword();
	let passwordText = document.querySelector("#password");
	passwordText.value = password;
}
// This function disable the start button, once the code is generated
// This prevents the code from running again until the page is refreshed
function save() {
	const msg = document.getElementById('msg');
	msg.innerHTML = 'Purge';
}
// This enables the Purge button to refresh the page, resetting the form.
function reset() {
	window.location.reload();
}