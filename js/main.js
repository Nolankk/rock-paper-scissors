const rps = ['rock', 'paper', 'scissors']
let computerScore = 0;
let playerScore = 0;

const displayWinner = document.getElementById('displayWinner');
const displayComputerScore = document.getElementById('computerScore');
const displayPlayerScore = document.getElementById('playerScore');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName("close")[0];
const playAgain = document.getElementById('playAgain');

// Return a random value from 'rps' array
function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)]
}

function endGame() {
    if (playerScore >= 5 || computerScore >= 5) {
        modal.style.display = 'block';

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
        }

        playAgain.onclick = function() {
            playerScore = 0;
            computerScore = 0;
            displayComputerScore.textContent = computerScore;
            displayPlayerScore.textContent = playerScore;
            displayWinner.textContent = '';
            modal.style.display = "none";
        }

        return 0;
    }
}

function playRound(playerSelection, computerSelection=computerPlay()) {
    playerSelection = playerSelection.toLowerCase();

    if (!rps.includes(playerSelection)) {
        return 'Not a valid selection.';
    }

    if (endGame() == 0) {
        return 0;
    }

    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            displayWinner.textContent = 'Paper beats Rock. You lose!';
            computerScore++;
        }
        else if (computerSelection == 'scissors') {
            displayWinner.textContent = 'Rock beats Scissors. You win!';
            playerScore++;
        }
        else {
            displayWinner.textContent = 'Tie.';
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            displayWinner.textContent = 'Scissors beats Paper. You lose!';
            computerScore++;
        }
        else if (computerSelection == 'rock') {
            displayWinner.textContent = 'Paper beats Rock. You win!';
            playerScore++;
        }
        else {
            displayWinner.textContent = 'Tie.';
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            displayWinner.textContent = 'Rock beats Scissors. You lose!';
            computerScore++;
        }
        else if (computerSelection == 'paper') {
            displayWinner.textContent = 'Scissors beats Paper. You win!';
            playerScore++;
        }
        else {
            displayWinner.textContent = 'Tie.';
        }
    }

    displayComputerScore.textContent = computerScore;
    displayPlayerScore.textContent = playerScore;

    endGame();
}

function capitalize(str) {
    first = str.charAt(0);
    str = str.slice(1);
    return first.toUpperCase() + str;
}

const body = document.querySelectorAll('.body');
body.forEach(bod => {
    bod.addEventListener('click', function (e) {
        playRound(e.target.id);
    })
});

/* Keeps a 5 round game score
function game() {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Rock, Paper, or Scissors?');
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);

        if (result == 'Player') {
            console.log(`You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
            playerWins++;
        }
        else if (result == 'Computer') {
            console.log(`You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
            computerWins++;
        }
        else {
            console.log('Tie.');
            ties++;
        }
    }

    if (playerWins > computerWins) {
        console.log(`You defeat the computer ${playerWins}-${computerWins}!`);
    }
    else if (playerWins < computerWins) {
        console.log(`You lost to the computer ${computerWins}-${playerWins}!`);
    }
    else {
        console.log('Tie.');
    }
} */