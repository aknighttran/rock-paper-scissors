var userScore = 0;
var computerScore = 0;

// Player's Choice
var userChoice = prompt("ROCK, PAPER, or SCISSORS?")
userChoice = userChoice.toUpperCase();
if (userChoice === 'ROCK' || userChoice === 'PAPER' || userChoice === 'SCISSORS') {
  document.write("<p>Player -" + " " + userChoice + "</p>")
} else {
  document.write("<p>Player - Please type a valid option. Refresh the page to restart</p>")
}

// //Computer Choice
var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = 'ROCK';
} else if(computerChoice <= 0.67) {
  computerChoice = 'PAPER';
} else {
  computerChoice = 'SCISSORS';
}
document.write("<p>Computer -" + " " + computerChoice + "</p>")

var compare = function(choice1,choice2) {
  if (choice1 === choice2 ) {
  return "It's a TIE!!! Refresh the page to try again.";
  }
  if (choice1 === "ROCK") {
    if (choice2 === "SCISSORS") {
      return "Player Wins!!! Refresh the page to play again.";
    } else {
      return "Computer Wins! Refresh the page to try again.";
    }
  }
  if (choice1 === "PAPER") {
    if (choice2 === "ROCK") {
      return "Player Wins!!! Refresh the page to play again.";
    } else {
      return "Computer Wins! Refresh the page to try again.";
    }
  }
  if (choice1 === "SCISSORS") {
    if (choice2 === "ROCK") {
      return "Player Wins!!! Refresh the page to play again.";
    } else {
      return "Computer Wins! Refresh the page to try again.";
    }
  }
};

var results = compare(userChoice,computerChoice);

document.write ("<br><hr><br>" + results);