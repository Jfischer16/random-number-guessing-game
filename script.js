var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;

var guess = prompt('I\'m thinking of a number between 1 and 6. What is it?');

if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if ( randomNumber > 3 ) {
  var guessTopRange = prompt('Try again. The number I am thinking of is more than 3');
  if (parseInt(guessTopRange) === randomNumber) {
      correctGuess = true;
  }
} else if ( randomNumber < 4 ) {
  var guessBottomRange = prompt('Try again. The number I am thinking of is less than 4');
  if (parseInt(guessBottomRange) === randomNumber) {
      correctGuess = true;
  }
}

if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number is ' + randomNumber + '.</p>');
}