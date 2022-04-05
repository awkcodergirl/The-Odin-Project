let computerScore = 0, playerScore = 0, moves = 5;
const pbuttons = document.querySelectorAll(".hbtn");

pbuttons.forEach(button => {
    button.addEventListener('click', function(e){
        // console.log(e);
        playRound(button.value);
    })
});

function computerChoice(){
    const compChoices = ["rock", "paper", "scissors"];
    const result = compChoices[Math.floor(Math.random() * 3)];

    const rock = document.querySelector(".crbtn");
    const paper = document.querySelector(".cpbtn");
    const scissors = document.querySelector(".csbtn");

    if (result == "rock"){
        rock.style.backgroundColor = "red";
        rock.style.transition = '0.7s';
        paper.style.backgroundColor = "aquamarine";
        scissors.style.backgroundColor = "aquamarine"

    } else if (result == "paper"){
        paper.style.backgroundColor = "red";
        paper.style.transition = '0.7s';
        rock.style.backgroundColor = "aquamarine";
        scissors.style.backgroundColor = "aquamarine"

    } else if (result == "scissors"){
        scissors.style.backgroundColor = "red";
        scissors.style.transition = '0.7s';
        paper.style.backgroundColor = "aquamarine";
        rock.style.backgroundColor = "aquamarine"
    }
    return result;
}
    

function playRound(playerSelection){
        const computerSelection = computerChoice();
        let result = "";
        
        console.log("p : ", playerSelection);
        console.log("c : ", computerSelection);

        if ((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")){
            computerScore+=1;     
            

            if (computerScore == 5){
                result = "Computer Wins!";
                document.querySelector("#computerScore").innerHTML = computerScore;
                disableButtons();
            } else {
                result = "You Lose! " + computerSelection + " beats " + playerSelection;
                document.querySelector("#computerScore").innerHTML = computerScore;
            }
        
        } else if ((playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "scissors")){
            playerScore+=1;  
          
           
            
            if (playerScore == 5){
                result = "Player Wins!";
                document.querySelector("#humanScore").innerHTML = playerScore;
                
                disableButtons();
            } else {
                result = "You Win! " + playerSelection + " beats " + computerSelection; 
                document.querySelector("#humanScore").innerHTML = playerScore;
            }
        
        } else if ((playerSelection == "paper" && computerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "scissors")){
            result = "It's a draw! Try again :(";
        }
        
        document.querySelector("#result").innerHTML = result;
        return;

}

function playAgain(){

}

function disableButtons(){
    pbuttons.forEach(button => {
        button.disabled = true;
    });
}