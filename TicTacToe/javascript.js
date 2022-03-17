function computerPlay(){
    const choice = Math.floor(Math.random() * 6);
    
    if (choice == 0 || choice == 1){
        return "rock";
    } else if (choice == 2 || choice == 3){
        return "paper";
    }

    return "scissors";
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")){
        return -1;
        
    
    } else if ((playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors")){
        return 1;
        
    
    } else if ((playerSelection == "paper" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "scissors")){
        return 0;
        
    }
}

function game(){
    let computerScore = 0, playerScore = 0;
    let playerSelection, computerSelection;
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Enter your choice");
        computerSelection = computerPlay();
        console.log(playerSelection + " " + computerSelection);
        let result = playRound(playerSelection, computerSelection);
        if (result == 1){
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            playerScore++;
        } else if (result == -1){
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            computerScore++;
        } else if (result == 0){
            console.log("It's a draw! Try again :(");
        }
    }

    console.log("Player Score: " + playerScore);
    console.log("Computer Score:" + computerScore);

    if (playerScore > computerScore){
        console.log("You win!");
    } else if (playerScore < computerScore){
        console.log("Computer wins!")
    } else {
        console.log("Draw game!")
    }
}

game();