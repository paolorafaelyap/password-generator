
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



//event listener
document.getElementById("generate").addEventListener("click", generatePassword);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("copy").addEventListener("click", copy);

function reset () 
{
    if (confirm("Resetting will refresh the page. Click OK to continue.") === true)
    {
        document.location.reload(); //refreshes page
    }
};


//need to make a code for generating password
// Assignment Code
//var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword() 
{
    // first, create arrays for each criteria

var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", 
"J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", 
"Y", "Z"];

var numbers=["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialChar=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">","?"];

// if desired password contains all criteria

var all = lowerCase.concat(upperCase, numbers, specialChar);

//if desired password only contains three of the criteria

var minusLowerCase = upperCase.concat(numbers, specialChar);
var minusUpperCase = lowerCase.concat(numbers, specialChar);
var minusNumeric = lowerCase.concat(upperCase, specialChar);
var minusSpecial= lowerCase.concat(upperCase, numbers);

//if desired password contains two criteria
var letters = [].concat(lowerCase, upperCase);
var numLower=[].concat(lowerCase, numbers);
var specLower=[].concat(lowerCase, specialChar);
var numUpper=[].concat(upperCase, numbers);
var specUpper=[].concat(upperCase, specialChar);
var specNum=[].concat(numbers, specialChar);

//next, create a variable that randomizes index based on criteria

var indexLow= Math.floor(Math.random() * 27);
var indexUp= Math.floor(Math.random() * 27);
var indexNum= Math.floor(Math.random() * 11);
var indexSpec= Math.floor(Math.random() * 14);
var indexLetters= Math.floor(Math.random() * 53);
var indexLetNum= Math.floor(Math.random() * 37);
var indexSpecNum= Math.floor(Math.random() * 24);
var indexSpecLet= Math.floor(Math.random() * 40);
var noLetter = Math.floor(Math.random() * 50);
var noSpec = Math.floor(Math.random() * 63);
var noNum= Math.floor(Math.random() * 66);
var indexAll=Math.floor(Math.random() * 76);

    //setting constant value for input
    const inputLength = document.getElementById("rangeV").value;
    //setting input values for checked
    const numBox = document.getElementById("numeric").checked;
    const specBox = document.getElementById("special").checked;
    const lowBox = document.getElementById("lowercase").checked;
    const upperBox = document.getElementById("uppercase").checked;

    for (i=0; i<inputLength; i++)
    {
     if (numBox && specBox && lowBox && upperBox)
     {
         all[indexAll];
     }   
     else if (!numBox && specBox && lowBox && upperBox)
     {
         minusNumeric[noNum];
     }

     else if (numBox && !specBox && lowBox && upperBox)
     {
         minusSpecial[noSpec];
     }

     else if (numBox && specBox && !lowBox && upperBox)
     {
         minusLowerCase[noLetter];
     }

     else if (numBox && specBox && lowBox && !upperBox)
     {
         minusUpperCase[noLetter];
     }

     else if (numBox && specBox && !lowBox && !upperBox)
     {
        specNum[indexSpecNum];
     }
     
     else if (numBox && !specBox && lowBox && !upperBox)
     {
        numLower[indexLetNum];
     }
     else if (!numBox && specBox && lowBox && !upperBox)
     {
         specLower[indexSpecLet];
     }
     else if (!numBox && !specBox && lowBox && upperBox)
     {
        letters[indexLetters];
     }
     else if (numBox && !specBox && !lowBox && upperBox)
     {
         numUpper[indexLetNum];
     }
     else if (!numBox && specBox && !lowBox && upperBox)
     {
         specUpper[indexSpecLet];
     }
     else if (numBox && !specBox && !lowBox && upperBox)
     {
         numbers[indexNum];
     }
     else if (!numBox && specBox && !lowBox && !upperBox)
     {
         specialChar[indexSpec];
     }
     else if (!numBox && !specBox && lowBox && !upperBox)
     {
        lowerCase[indexLow];
     }
     else if (!numBox && !specBox && !lowBox && upperBox)
     {
         upperCase[indexUp];
     }
     else
     {
         alert("Please select at least one criteria.");
     }
    }
}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);



