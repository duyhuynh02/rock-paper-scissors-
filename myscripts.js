function computerPlay() {
    let Array = ['ROCK', 'PAPER', 'SCISSORS']; 
    let result = Array[Math.floor(Math.random() * Array.length)];
    return result;
}

function playerPlay() {
    let isChoice = false; 

    while (!isChoice) {
        let userInput = prompt("Kindly input from your keyboard what choice? Rock-Paper-Scissors");
        userInput = userInput.toUpperCase(); 
        if (userInput === 'ROCK' || userInput === 'PAPER' || userInput === 'SCISSORS') {
            isChoice = true;
            return userInput;
        }
        else {
            alert("Choose correctly. What's wrong with you?");
        }
    } 
}


function playRound(playerSelection, computerSelection) {
    if ( (playerSelection === "ROCK" && computerSelection === "ROCK") ||
        (playerSelection === "PAPER" && computerSelection === "PAPER") || 
        (playerSelection === "SCISSORS" && computerSelection === "SCISSORS")
    ) { 
        alert("It's nothing!"); 
        return 0; 
    }
    else if ( (playerSelection === "ROCK" && computerSelection === "PAPER") ||
            (playerSelection === "PAPER" && computerSelection === "SCISSORS") || 
            (playerSelection === "SCISSORS" && computerSelection === "ROCK")
        ) {
        alert("Computer won 1 point!");
        return -1; 
    }
    else { 
        alert("You won 1 point!");
        return 1; 
    }
  }


function game() {
    let result;  // Draw = 0 | Lose = -1 | Win = 1 
    let userPoints = 0;
    let computerPoints = 0; 

    for (let i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);

        if (result === -1) computerPoints++;
        else userPoints++;
    }

    alert(`So your point is ${userPoints} and computer point is ${computerPoints}. Then: `);

    if (userPoints > computerPoints) alert("You won! Congrats!");
    else if (userPoints < computerPoints) alert("You noob!"); 
    else alert("It's much worse than a lose, how do you play a draw game?");

}

game();