// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Initialise the (empty) Password Character Array
// This is the array of characters the password is to be generated from after user prompts
let pwdCharArray = [];

// initialise pwdLen to zero (pwdLen = Password Length)
// This will be updated from user prompt as to what length of password they want
let pwdLen = 0;

// Function to prompt user for password options
function getPasswordOptions() {

  // initialise / empty pwdCharArray for when user presses generate password button more than once
  pwdCharArray = [];
  
  // ask user for length of password pwdLen
  // verify pwdLen >=10 and <=64 and is a number otherwise re-ask question
  do {
     pwdLen = Number(window.prompt("How many Characters you want your password to be ? 10-64 "));
     // TO ADD  2nd more detailed instruction if first prompt fails to get correct input
     // TO ADD and/or instruction which notes what mistake was made and prompts 
     // TO ADD after X attempts exit gracefully 
    } while ((pwdLen <10) || (pwdLen>64) || isNaN(pwdLen) );
 

  // Ask user for character types to be used in their password
  // This will loop if the user doesn't select any.
  // TO ADD if user has selected no elements - display more/better instructions
  do {
        // LOWERCASE
        // ask user if they want lowercase characters in their password
        if (window.confirm("Do you want to include LOWER case characters in your password?") === true) {
          pwdCharArray = pwdCharArray.concat(lowerCasedCharacters);
        }

        // UPPERCASE
        // ask user if they want uppercase characters in their password
        if (window.confirm("Do you want to include UPPER case characters in your password?") === true) {
          pwdCharArray = pwdCharArray.concat(upperCasedCharacters);
        }

        // NUMERIC
        // ask user if they want numeric characters in their password
        if (window.confirm("Do you want to include NUMERIC characters in your password?") === true) {
          pwdCharArray = pwdCharArray.concat(numericCharacters);
        }

        // SPECIAL
        // ask user if they want special characters in their password
        if (window.confirm("Do you want to include SPECIAL characters in your password?") === true) {
          pwdCharArray = pwdCharArray.concat(specialCharacters);
        }
        
    } while (pwdCharArray.length == 0); // If length is zero the user hasn't selected any character types so re-ask questions

}

// Function for getting a random element from an array
function getRandom(arr) {

  // Generate random number between 0 and array length-1
  // This is achieved by math.random gives a number between 0 and 1. multiply by array length
  return  ( arr.at(Math.floor(Math.random()*(arr.length)))) ;
}

// Function to generate password with user input
function generatePassword() {

  //Get Password Options From User
  getPasswordOptions();

  //start with empty password - genPwd = Generated Password
  let genPwd = "";
  
  //For loop until pwdLen met. Add to genPwd with random character on each loop
  for (let index = 0; index < pwdLen; index++) {
      genPwd += (getRandom(pwdCharArray));
  }

  //Return password to function  
return  genPwd;

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password; 
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);