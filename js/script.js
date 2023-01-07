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

//initialise pwdLen (Password Length)
let pwdLen = 0 ;

// Function to prompt user for password options
function getPasswordOptions() {

  //initialise pwdCharArray for when user presses button more than once
  pwdCharArray = [];

  //ask user for length of password pwdLen
  //verify pwdLen >=10 and <=64 and is a number
  do {
     pwdLen = Number(window.prompt("How many Characters you want your password to be ? 10-64 "));
     // TO ADD  2nd more detailed instruction if first prompt fails
     // TO ADD and/or instruction which notes what mistake was made and prompts 
     // TO ADD after X attempts exit gracefully 
    } while ((pwdLen <10) || (pwdLen>64) || isNaN(pwdLen) );
 

  //Ask user for character types
  // This will loop if the user doesn't select any.
  // TO ADD if user has selected no elements - display more instructions
  do {
  
        //LOWERCASE
        //ask user if they want lowercase characters in their password
        if (window.confirm("Do you want to include LOWER case characters in your password?") === true) {
          pwdCharArray = pwdCharArray.concat(lowerCasedCharacters);
        }

        //UPPERCASE
        //ask user if they want uppercase characters in their password
        if (window.confirm("Do you want to include UPPER case characters in your password?") === true) {
          pwdCharArray = pwdCharArray.concat(upperCasedCharacters);
        }

        //NUMERIC
        //ask user if they want numeric characters in their password
        if (window.confirm("Do you want to include NUMERIC characters in your password?") === true) {
          pwdCharArray = pwdCharArray.concat(numericCharacters);
        }

        //SPECIAL
        //ask user if they want special characters in their password
        if (window.confirm("Do you want to include SPECIAL characters in your password?") === true) {
          pwdCharArray = pwdCharArray.concat(specialCharacters);
        }
        
    } while (pwdCharArray.length === 0);


}

// Function for getting a random element from an array
function getRandom(arr) {

  //get array length 
   let arrayLength = arr.length;
   console.log ("array len=" + arrayLength);
   //generate random number between 0 and array length
   //we add one to arrayLength because math.random gives a number between 0 and 1

  // return getRandom = Math.floor(Math.random()*(arrayLength+1));

  return getRandom = ['GR'];

}

// Function to generate password with user input
function generatePassword() {

  //Get Password Options From User
  getPasswordOptions();

  console.log(pwdCharArray);

  //start with empty password
  let genPwd = ['test'];
  //For loop until pwdLen met
  for (let index = 0; index < pwdLen; index++) {
      //get a random element from the array
      //add element to password 
     // console.log(getRandom(pwdCharArray));
      console.log(genPwd);
      console.log(index);
    
  }
  

//Return password to function  
return generatePassword = genPwd;

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



