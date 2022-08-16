// User input variables 
var confirmNum;
var confirmSpec;
var confirmUp;
var confirmLow;
var selection;

// Password variables 
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// Variable for User's choices 
var choices;

// Variable to create event object "generate" + the handler to the "get" node 
// I have no idea what this is actually doing -- ask ?? why is this just 'function'?
// Can i just put a variable retVal in here like this? why?
// Why do I put = retVal at the end of this? or do I?
var gen = document.getElementById("generate");

gen.addEventListener("click", function() {
    retVal = generatePassword();
    document.getElementById("password").placeholder = retVal;
});

// Function to generate password //
function generatePassword() {
    // Ask for user input //
    selection = prompt("Enter a password length between 8 and 128.");
    // First if statement //
    if (!selection) {
        alert("Value needed!");
    } else if (selection < 8 || selection > 128) {
        selection = prompt("Please choose a password length between 8 and 128.");

    } else {
        confirmLow = confirm("Would you like to use Lowercase letters?");
        confirmUp = confirm("Would you like to use Uppercase letters?");
        confirmNum = confirm("Would you like to use Numbers?");
        confirmSpec = confirm("Would you like to use Special characters?");
    };

    // If user enters all cancel options 
    if (!confirmLow && !confirmUp && !confirmNum && !confirmSpec) {
        choices = alert("Please choose at least one criteria!");
    }
    // Else if user enters all ok options 
    else if (confirmLow && confirmUp && confirmNum && confirmSpec) {
        choices = lower.concat(upper, number, special);
    }
    // Else if user enters 3 ok options 
    else if (confirmLow && confirmUp && confirmNum) {
        choices = lower.concat(upper, number);
    }
    else if (confirmLow && confirmUp && confirmSpec) {
        choices = lower.concat(upper, special);
    }
    else if (confirmLow && confirmNum && confirmSpec) {
        choices = lower.concat(number, special);
    }
    else if (confirmNum && confirmUp && confirmSpec) {
        choices = number.concat(upper, special);
    }
    // Else if user enters 2 ok options
    else if (confirmLow && confirmUp) {
        choices = lower.concat(upper);
    }
    else if (confirmLow && confirmNum) {
        choices = lower.concat(number);
    }
    else if (confirmLow && confirmSpec) {
        choices = lower.concat(special);
    }
    else if (confirmUp && confirmNum) {
        choices = upper.concat(number); 
    }
    else if (confirmUp && confirmSpec) {
        choices = upper.concat(special);
    }
    else if (confirmNum && confirmSpec) {
        choices = number.concat(special);
    }
    // Else if user enters 1 ok option
    else if (confirmLow) {
        choices = lower;
    }
    else if (confirmUp) {
        choices = upper;
    }
    else if (confirmNum) {
        choices = number;
    }
    else if (confirmSpec) {
        choices = special;
    };

// How do i get users option for amount of length in my array?????

    //  Create random selection of user choices variables
    // Is this for loop even close to being right??
    for  (var i = 0; i < selection; i++) {
        var userChoices = choices[Math.floor(Math.random() * choices.length)];
    }
}
