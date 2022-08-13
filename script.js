// Input variables //
var charLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var charSpec = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var event





var password=document.getElementById("password");

var length = Number(prompt("Enter a password length between 8 and 128.")),
    charLower = prompt("Would you like to use lowercase?"),
    charUpper = prompt("Would you like tou se uppercase?"),
    charNum = prompt("Would you like to use numbers?")
    charSpec = prompt("Would you like to use special characters?"),
    password = generatePassword()
document.getElementById("display").value = password;


function generatePassword() {
    var charTypes = {
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numeric: "0123456789",
        special: "!@#$%^&*()",
    };
    var charTypes = 
}