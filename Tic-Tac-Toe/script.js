let gameBoard = (function(){
    'use strict';

    // Initialize board array and set the first turn to "X"
    let board = new Array(9).fill(null);
    let turn = "X";
    let scoreX = 0, scoreO = 0, draw = 0;
    let winnerFound = false;

    function makeMove(){

        if (!stillPlaying()){
            return;
        }

        let cellNumber = 0;
        let cellsCollection = document.getElementsByClassName("cell");


        Array.from(cellsCollection).forEach(function(cell){
            cell.addEventListener("click", function(e){

                cellNumber = parseInt(e.target.classList[1]);
                
                if (!board.includes(null) || winnerFound){
                    return;
                } 

                board[cellNumber] = turn;
                checkWinner();

                let tag = document.createElement("p");
                tag.id = "symbol";
                tag.style.fontSize = "100px";
                tag.textContent = board[cellNumber];
                e.target.appendChild(tag);
                
                if (!winnerFound){
                    nextTurn();
                }

                if (checkDraw()){
                    return;
                }
            });
        });
        return board;
    }

    // If current turn is "X", then next turn will be "O" and vice versa
    function nextTurn(){
        turn = turn === "X" ? "O" : "X";
        return turn;
    }

    // Check if any of combinations correspond to any of the winning states
    function checkWinner(){

        // All the winning combinations
        const WINNING_STATES = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ];

        let statement = document.getElementById("statement");

        for (const row of WINNING_STATES) {
            const [a,b,c] = row;

            if (!winnerFound && board[a] != null && board[a] === board[b] && board[b] === board[c]){
                statement.textContent = `${board[a]} is the winner 🥳`;
                updateScore(board[a]);
                winnerFound = true;
            }
        }
        return winnerFound;
    }

    function stillPlaying(){
        return (!winnerFound && board.includes(null));
    }

    function checkDraw(){
        let statement = document.getElementById("statement");

        if (!winnerFound && !board.includes(null)){
            statement.textContent = `It's a draw 💩`;
            draw++;
            return true;
        }
    }

    function updateScore(player){
        if (player === "X"){
            scoreX++;
        } else if (player === "O"){
            scoreO++;
        }
    }

    function restartGame(){
        board.fill(null);
        winnerFound = false;
        
        let cellsCollection = document.getElementsByClassName("cell");

        Array.from(cellsCollection).forEach(function(cell){
            cell.innerHTML = "";
        });

        let statement = document.getElementById("statement");
        statement.textContent = "";

        return {scoreX, scoreO, draw};
    }

    return {
        makeMove: makeMove,
        restartGame: restartGame
    }
})();

// Here playerType -> my oponent
// symbol -> my weapon
function createPlayer(playerType, symbol) {
    
    return {
        playerType: playerType,
        symbol: symbol,

        // If the playerType is "Player", then I'm playing with "Player 2"
        // If the playerType is "Computer", then I'm playing with "Computer"
        setPlayer (){
            let opponent = document.getElementById("oponentType");

            if (playerType === "Player"){
                opponent.textContent = "PLAYER 2";
            } else if (playerType === "Computer"){
                opponent.textContent = "COMPUTER";
            }
        },

        getPlayer(){
            return this;
        },

        // If the symbol is "X", then "X" is the symbol I'll use 
        // whily my oponent will use symbol "O", and vice versa
        setScore(scoreX, scoreO, draw){

            let playerScore = document.getElementById("player-score");
            let oponentScore = document.getElementById("oponent-score");
            let drawScore = document.getElementById("draw-score");

            if (symbol === "X"){
                playerScore.textContent = scoreX;
                oponentScore.textContent = scoreO;
                drawScore.textContent = draw;
                
            } else if (symbol === "O"){
                playerScore.textContent = scoreO;
                oponentScore.textContent = scoreX;
                drawScore.textContent = draw;
            }
        }
    };
}

// Function to detect which buttons were pressed
// And call the appropriate functions in response
function detectClicks(){

    let oponent = '', weapon = '';
    let player, score;

    document.addEventListener("click", (event) => {
        const {target} = event;

        if (target.id === "player-btn"){
            oponent = "Player";
            showWeapons();
        } else if (target.id === "computer-btn"){
            oponent = "Computer";
            showWeapons();
        } else if (target.id === "x-btn"){
            weapon = "X";
            showPlay();
        } else if (target.id === "o-btn"){
            weapon = "O";
            showPlay();
        } else if (target.classList.contains("playbtn")){
            player = createPlayer(oponent, weapon);
            player.setPlayer();
            showGame();
        } else if (target.id === "restart-button"){
            score = gameBoard.restartGame();
            player.setScore(score.scoreX, score.scoreO, score.draw);
        }
    });
}

function showWeapons(){
    let weaponDetails = document.getElementById("weaponDetails");
    weaponDetails.style.display = "block";
}

function showPlay(){
    let playButton = document.getElementById("playButton");
    playButton.style.display = "block";
}

function showGame(){
    let weaponDetails = document.getElementById("weaponDetails");
    let playerDetails = document.getElementById("playerDetails");
    let score_board = document.getElementById("score-board");
    let game_container = document.getElementById("game-container");
    let playButton = document.getElementById("playButton");
    let finalContainer = document.getElementById("final-container");

    playerDetails.style.display = "none";
    weaponDetails.style.display = "none";
    playButton.style.display = "none";
    score_board.style.visibility = "visible";
    score_board.style.height = "auto";
    game_container.style.visibility = "visible";
    game_container.style.height = "auto";
    finalContainer.style.visibility = "visible";
    finalContainer.style.height = "auto";
}

detectClicks();
gameBoard.makeMove();