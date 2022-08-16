// User input variables 
var confirmNum;
var confirmSpec;
var confirmUp;
var confirmLow;
var select;

// Password variables 
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// Variable for User's choices 
var userChoices;

// Variable to create event object "generate" + the handler to the "get" node
var get = document.querySelector("generate");
get.addEventListener("click", function () {
    document.getElementById("password").placeholder;
});

// Function to generate password //
function generatePassword() {
    // Ask for user input //
    select = prompt("Enter a password length between 8 and 128.");
    // First if statement //
    if (!select) {
        alert("Value needed.");
    } else if (select < 8 || select > 128) {
        select = prompt("Please choose a password length between 8 and 128.");

    } else {
        confirmLow = confirm("Would you like to use Lowercase letters?");
        confirmUp = confirm("Would you like to use Uppercase letters?");
        confirmNum = confirm("Would you like to use Numbers?");
        confirmSpec = confirm("Would you like to use Special characters?");
    };

    // If user enters all no options 
    if (!confirmLow && !confirmUp && !confirmNum && !confirmSpec) {
        userChoices = alert("Please choose at least one criteria!");
    }
    // Else if user enters all options 
    else if (confirmLow && confirmUp && confirmNum && confirmSpec) {
        userChoices = lower.concat(upper, number, special);
    }
    // Else if user enters 3 options 
    else if (confirmLow && confirmUp && confirmNum) {
        userChoices = lower.concat(upper, number);
    }
    else if (confirmLow && confirmUp && confirmSpec) {
        userChoices = lower.concat(upper, special);
    }
    else if (confirmLow && confirmNum && confirmSpec) {
        userChoices = lower.concat(number, special);
    }
    else if (confirmNum && confirmUp && confirmSpec) {
        userChoices = number.concat(upper, special);
    }
    // Else if user enters 2 options
    else if (confirmLow && confirmUp) {
        userChoices = lower.concat(upper);
    }
    else if (confirmLow && confirmNum) {
        userChoices = lower.concat(number);
    }
    else if (confirmLow && confirmSpec) {
        userChoices = lower.concat(special);
    }
    else if (confirmUp && confirmNum) {
        userChoices = upper.concat(number); 
    }
    else if (confirmUp && confirmSpec) {
        userChoices = upper.concat(special);
    }
    else if (confirmNum && confirmSpec) {
        userChoices = number.concat(special);
    }
    // Else if user enters 1 option
    else if (confirmLow) {
        userChoices = lower;
    }
    else if (confirmUp) {
        userChoices = upper;
    }
    else if (confirmNum) {
        userChoices = number;
    }
    else if (confirmSpec) {
        userChoices = special;
    }
