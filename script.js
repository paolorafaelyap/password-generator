
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

    //setting input values for checked
    const numBox = document.getElementById("numeric").checked;
    const specBox = document.getElementById("special").checked;
    const lowBox = document.getElementById("lowercase").checked;
    const upperBox = document.getElementById("uppercase").checked;
    

    //setting constant value for input
    const inputLength = document.getElementById("range").value;

    for (i=0; i<inputLength; i++)
    {
   
     if (numBox && specBox && lowBox && upperBox)
     {
         //if desired password contains all four criteria:

         var all=[].concat(lowerCase, upperCase, numbers, specialChar);
         var indexAll=Math.floor(Math.random() * 75);
         document.getElementById("password").append(all[indexAll]);
     }   
        //if desired password only contains three of the criteria:
     else if (!numBox && specBox && lowBox && upperBox)
     {
         var minusNumeric = lowerCase.concat(upperCase, specialChar);
         var noNum= Math.floor(Math.random() * 65);
         document.getElementById("password").append(minusNumeric[noNum]);
     }

     else if (numBox && !specBox && lowBox && upperBox)
     {
        var minusSpecial= lowerCase.concat(upperCase, numbers);
        var noSpec = Math.floor(Math.random() * 62);
        document.getElementById("password").append(minusSpecial[noSpec]);
     }

     else if (numBox && specBox && !lowBox && upperBox)
     {
        var minusLowerCase = upperCase.concat(numbers, specialChar);
        var noLetter = Math.floor(Math.random() * 49);
        document.getElementById("password").append(minusLowerCase[noLetter]);
     }

     else if (numBox && specBox && lowBox && !upperBox)
     {
        var minusUpperCase = lowerCase.concat(numbers, specialChar);
        var noLetter = Math.floor(Math.random() * 49);
        document.getElementById("password").append(minusUpperCase[noLetter]);
     }

     //if desired password contains two criteria:
     else if (numBox && specBox && !lowBox && !upperBox)
     {
        var specNum=[].concat(numbers, specialChar);
        var indexSpecNum= Math.floor(Math.random() * 23);
        document.getElementById("password").append(specNum[indexSpecNum]);
     }
     
     else if (numBox && !specBox && lowBox && !upperBox)
     {
        var numLower=[].concat(lowerCase, numbers);
        var indexLetNum= Math.floor(Math.random() * 36);
        document.getElementById("password").append(numLower[indexLetNum]);
     }
     else if (!numBox && specBox && lowBox && !upperBox)
     {
        var specLower=[].concat(lowerCase, specialChar);
        var indexSpecLet= Math.floor(Math.random() * 39);
        document.getElementById("password").append(specLower[indexSpecLet]);
     }
     else if (!numBox && !specBox && lowBox && upperBox)
     {
        var letters = [].concat(lowerCase, upperCase);
        var indexLetters= Math.floor(Math.random() * 52);
        document.getElementById("password").append(letters[indexLetters]);
     }
     else if (numBox && !specBox && !lowBox && upperBox)
     {
        var numUpper=[].concat(upperCase, numbers);
        var indexLetNum= Math.floor(Math.random() * 36);
        document.getElementById("password").append(numUpper[indexLetNum]);
     }
     else if (!numBox && specBox && !lowBox && upperBox)
     {
        var specUpper=[].concat(upperCase, specialChar);
        var indexSpecLet= Math.floor(Math.random() * 39);
        document.getElementById("password").append(specUpper[indexSpecLet]);
     }
     //if desired password contains one criteria:
     else if (numBox && !specBox && !lowBox && !upperBox)
     {
        var indexNum= Math.floor(Math.random() * 10);
        document.getElementById("password").append(numbers[indexNum]);
     }
     else if (!numBox && specBox && !lowBox && !upperBox)
     {
        var indexSpec= Math.floor(Math.random() * 13);
        document.getElementById("password").append(specialChar[indexSpec]);
     }
     else if (!numBox && !specBox && lowBox && !upperBox)
     {
        var indexLow= Math.floor(Math.random() * 26);
        document.getElementById("password").append(lowerCase[indexLow]);
     }
     else if (!numBox && !specBox && !lowBox && upperBox)
     {
        var indexUp= Math.floor(Math.random() * 26);
        document.getElementById("password").append(upperCase[indexUp]);
     }
     // if password contains on criteria:
     else
     {
         alert("Please select at least one criteria.");
         return;
     }
    }
}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);



