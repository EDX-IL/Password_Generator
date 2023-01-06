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

//Initialise the Password Character Array
//This is the array of characters the password is to be generator from
let pwdCharArray = [];


// Function to prompt user for password options
function getPasswordOptions() {

  //ask user for length of password pwdLen
  //verify pwdLen >=10 and <=64 and is a number
  //initialise pwdLen
  let pwdLen = 0 ;
  do {
     pwdLen = Number(window.prompt("How many Characters you want your password to be ? 10-64 "));
     // add 2nd more detailed instruction if first prompt fails
     // and/or instruction which notes what mistake was made and prompts 
    } while ((pwdLen <10) || (pwdLen>64) || isNaN(pwdLen) );


  //Ask user for character types

}

// Function for getting a random element from an array
function getRandom(arr) {

  //get array length 
   let arrayLength = arr.length();

   //generate random number between 0 and array length
   //we add one to arrayLength because math.random gives a number between 0 and 1

   return getRandom = Math.floor(Math.random()*(arrayLength+1))

}

// Function to generate password with user input
function generatePassword() {


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


getPasswordOptions();
