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

// Variable for User's choices with placeholder for choices
var choices = [];

// Variable to create event object "generate" + the handler to the "gen" node 
var gen = document.getElementById("generate");
// Add EventListener to tell DOM what to do when gen is selected/clicked
gen.addEventListener("click", function() {
    retVal = generatePassword();
    document.getElementById("password").textContent = retVal;
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
    // If user enters any other combinations of options
    else {
        if (confirmLow) {
            choices = choices.concat(lower);
        }
        if (confirmUp) {
            choices = choices.concat(upper);
        }
        if (confirmNum) {
            choices = choices.concat(number);
        }
        if (confirmSpec) {
            choices = choices.concat(special);
        }
    };

// Create variable to hold the place for my users selected number length criteria in array
    var basket = ""
    //  Create random selection of user choices variables
    for  (var i = 0; i < selection; i++) {
        var userChoices = choices[Math.floor(Math.random() * choices.length)];
        basket += userChoices;
    }

    return basket
}

// **THESE NOTES ARE FROM EARLIER, CLUMSIER CODE that I then cleaned up with help from tutor:
// and are only in here for grader purposes -- will delete after grading**

   // // If user enters all cancel options 
    // if (!confirmLow && !confirmUp && !confirmNum && !confirmSpec) {
    //     choices = alert("Please choose at least one criteria!");
    // }
    // // Else if user enters all ok options 
    // else if (confirmLow && confirmUp && confirmNum && confirmSpec) {
    //     choices = lower.concat(upper, number, special);
    // }
    // // Else if user enters 3 ok options 
    // else if (confirmLow && confirmUp && confirmNum) {
    //     choices = lower.concat(upper, number);
    // }
    // else if (confirmLow && confirmUp && confirmSpec) {
    //     choices = lower.concat(upper, special);
    // }
    // else if (confirmLow && confirmNum && confirmSpec) {
    //     choices = lower.concat(number, special);
    // }
    // else if (confirmNum && confirmUp && confirmSpec) {
    //     choices = number.concat(upper, special);
    // }
    // // Else if user enters 2 ok options
    // else if (confirmLow && confirmUp) {
    //     choices = lower.concat(upper);
    // }
    // else if (confirmLow && confirmNum) {
    //     choices = lower.concat(number);
    // }
    // else if (confirmLow && confirmSpec) {
    //     choices = lower.concat(special);
    // }
    // else if (confirmUp && confirmNum) {
    //     choices = upper.concat(number); 
    // }
    // else if (confirmUp && confirmSpec) {
    //     choices = upper.concat(special);
    // }
    // else if (confirmNum && confirmSpec) {
    //     choices = number.concat(special);
    // }
    // // Else if user enters 1 ok option
    // else if (confirmLow) {
    //     choices = lower;
    // }
    // else if (confirmUp) {
    //     choices = upper;
    // }
    // else if (confirmNum) {
    //     choices = number;
    // }
    // else if (confirmSpec) {
    //     choices = special;
    // };
