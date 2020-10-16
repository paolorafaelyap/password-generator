
// first, create arrays for each criteria

var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", 
"J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", 
"Y", "Z"];

var numeric=["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialChar=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">","?"];

// if desired password contains all criteria

var all = lowerCase.concat(upperCase, numeric, specialChar);

//if desired password only contains three of the criteria

var minusLowerCase = upperCase.concat(numeric, specialChar);
var minusUpperCase = lowerCase.concat(numeric, specialChar);
var minusNumeric = lowerCase.concat(upperCase, specialChar);
var minusSpecial= lowerCase.concat(upperCase, numeric);

//if desired password contains two criteria
var letters = [].concat(lowerCase, upperCase);
var numLower=[].concat(lowerCase, numeric);
var specLower=[].concat(lowerCase, specialChar);
var numUpper=[].concat(upperCase, numeric);
var specUpper=[].concat(upperCase, specialChar);
var specNum=[].concat(numeric, specialChar);

//next, create a variable that randomizes

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//code to display value of the bubble from css-tricks.com
const
    range = document.getElementById('range'),
    rangeV = document.getElementById('rangeV'),
    setValue = ()=>{
        const
            newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
            newPosition = 10 - (newValue * 0.2);
        rangeV.innerHTML = `<span>${range.value}</span>`;
        rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);