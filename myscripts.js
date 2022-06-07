// GLOBAL VARIABLES
let userPoints = 0;
let computerPoints = 0;
let result;  // Draw = 0 | Lose = -1 | Win = 1

//BUTTON 
const buttonArray = document.querySelectorAll(".button");
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const resultBoard = document.querySelector('#result');
const resetButton = document.querySelector('#reset-game');
const computerRockButton = document.querySelector('#computer-button-rock');
const computerPaperButton = document.querySelector('#computer-button-paper');
const computerScissorsButton = document.querySelector('#computer-button-scissors');

// GLOBAL LIST  
choiceList = ['ROCK', 'PAPER', 'SCISSORS']; 


//FUNCTION 
function computerPlay() {
    let result = choiceList[Math.floor(Math.random() * choiceList.length)];
    return result;
}


function playRound(playerSelection, computerSelection) {
    if ( (playerSelection === "ROCK" && computerSelection === "ROCK") ||
        (playerSelection === "PAPER" && computerSelection === "PAPER") || 
        (playerSelection === "SCISSORS" && computerSelection === "SCISSORS")
    ) { 
        resultBoard.textContent = "Its a draw, keep playing."
        return 0; 
    }
    else if ( (playerSelection === "ROCK" && computerSelection === "PAPER") ||
            (playerSelection === "PAPER" && computerSelection === "SCISSORS") || 
            (playerSelection === "SCISSORS" && computerSelection === "ROCK")
        ) {
        resultBoard.textContent = "Computer won 1 point!";
        return -1; 
    }
    else { 
        resultBoard.textContent = "You won 1 point!";
        return 1; 
    }
  }

function rewardPointUser() {
    userPoints += 1;
    playerScore.textContent = `${userPoints}`
}

function rewardPointComputer() {
    computerPoints += 1;
    computerScore.textContent = `${computerPoints}`
}

function resetGame() {
    document.location.reload(true);
}

function addHoverAnimation() {
    this.style.border = '4px solid red';
}

function removeHoverAnimation() {
    this.style.border = '4px solid gray';
}

function addHoverComputer(computerSelection) {
    if (computerSelection === "ROCK") {
        computerRockButton.style.border = '4px solid yellow';
        setTimeout(() => {computerRockButton.style.border = '4px solid gray';}, 300);
    }
    else if (computerSelection === "PAPER") {
        computerPaperButton.style.border = '4px solid yellow';
        setTimeout(() => {computerPaperButton.style.border = '4px solid gray';}, 300);
    }
    else {
        computerScissorsButton.style.border = '4px solid yellow';
        setTimeout(() => {computerScissorsButton.style.border = '4px solid gray';}, 300);
    }
}


function playGame() {
    let playerSelection = this.dataset.value;
    let computerSelection = computerPlay();
    //Add hover for computer selection 
    addHoverComputer(computerSelection)
    result = playRound(playerSelection, computerSelection);

    if (result === 1) { rewardPointUser(); }
    else if (result == -1) { rewardPointComputer(); }

    if (userPoints >= 5 || computerPoints >= 5) {
        resultBoard.textContent = `So your point is ${userPoints} and computer point is ${computerPoints}. Then: `;
        if (userPoints > computerPoints) {
            resultBoard.textContent = "You won! Congrats!";
        }
        else if (userPoints < computerPoints) { 
            resultBoard.textContent = "You noob!"; 
        }
        else {
            resultBoard.textContent = "It's much worse than a lose, how do you play a draw game?";
        } 
        resultBoard.textContent = "This will automatically reset after done or you can reset yourself. Bye!";
        setTimeout(resetGame, 3000);
        //REMOVE EVENT LISTENER 
        }
}

function game() {
    buttonArray.forEach((button) => {
        //Add animation for better play 
        button.addEventListener("mouseenter", addHoverAnimation);
        button.addEventListener("mouseleave", removeHoverAnimation);
        //Actual playing game 
        button.addEventListener("click", playGame);
        }
    )

    //RESET THE STATE WHEN DONE!
    resetButton.addEventListener("click", resetGame);
}

game();

