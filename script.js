// User input variables 
var confirmNum;
var confirmSpec;
var confirmUp;
var confirmLow;
var enter;

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

    // If user enters all no options //
    if (!confirmLow && !confirmUp && !confirmNum && !confirmSpec) {
        choices = alert("Please choose atleast one criteria!");
    }
    // Else if user enters all options //
    else if (confirmLow && confirmUp && confirmNum && confirmSpec) {
        choices = lower.concat(upper, number, special);
    }
    // Else if user enters 3 options //
    else if (confirmLow && confirmUp && confirmNum) {
        choices = lower.concat(upper, number);
    }
    else if  (confirmLow && confirmUp && confirmSpec) {
        choices = lower.concat(upper, special);
    }
    
}

