// Assignment code here
function generatePassword( len ) {
    var length = (len)?(len):(10);;
    var letters = "abcdefghijklmnopqrstuvwxyz";  
    var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    var number = '0123456789';
    var special = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var Capitals = window.confirm("Capitals?");
    var Specials = window.confirm("Special Characters?");
    var Numbers = window.confirm("Numbers?");
    var Characters = window.prompt("How many Characters?");
    var password = "";
    var character = "";


    while( password.length<length ) {
        entity1 = Math.ceil(letters.length * Math.random()*Math.random());
        entity2 = Math.ceil(number.length * Math.random()*Math.random());
        entity3 = Math.ceil(special.length * Math.random()*Math.random());
        entity4 = Math.ceil(lettersUpper.length * Math.random()*Math.random());
        character += lettersUpper.charAt( entity4 );
        character += number.charAt( entity2 );
        character += special.charAt( entity3 );
        password = character;
    }
    
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,len);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
