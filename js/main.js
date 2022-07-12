const rps = ['rock', 'paper', 'scissors']

// Return a random value from 'rps' array
function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)]
}

function playRound(playerSelection, computerSelection=computerPlay()) {
    playerSelection = playerSelection.toLowerCase();

    if (!rps.includes(playerSelection)) {
        return 'Not a valid selection.';
    }

    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return 'Computer';
        }
        else if (computerSelection == 'scissors') {
            return 'Player';
        }
        else {
            return 'Tie.';
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return 'Computer';
        }
        else if (computerSelection == 'rock') {
            return 'Player';
        }
        else {
            return 'Tie.';
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return 'Computer';
        }
        else if (computerSelection == 'paper') {
            return 'Player';
        }
        else {
            return 'Tie';
        }
    }
}

function capitalize(str) {
    first = str.charAt(0);
    str = str.slice(1);
    return first.toUpperCase() + str;
}

// Keeps a 5 round game score
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
}