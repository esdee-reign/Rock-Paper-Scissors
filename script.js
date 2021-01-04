const rockPress = document.querySelector('#rock');
const paperPress = document.querySelector('#paper');
const scissorsPress = document.querySelector('#scissors');
const result = document.querySelector('#result');
const userChoice = document.querySelector('#userChoice');
const computerChoice = document.querySelector('#computerChoice');
let winner = '';
rockPress.addEventListener('click', playRound);
paperPress.addEventListener('click', playRound);
scissorsPress.addEventListener('click', playRound);
let userStat = document.querySelector('#userStat');
let computerStat =document.querySelector('#computerStat');

let userScore = 0;
let computerScore = 0;

function computerPlay() {
    let selections = ["rock" , "paper" , "scissors" ];
    let random =  Math.floor(Math.random() * 3);
    let selection = selections[random];
    return selection;
}

function Score() {
    if(winner == "It's a tie!"){
        result.textContent = "It's a tie!";
    }
    else if (winner === 'user'){
        userScore++;

    }
    else if( winner === 'computer' ){
        computerScore++;
    }
    userStat.textContent = `User: ${userScore}`;
    computerStat.textContent = `Computer: ${computerScore}`;
}

function playRound(e) {
    
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    
    if(computerSelection == playerSelection) {
        userChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        Score();
        // result.textContent = "It's a tie!";
    }
    else if(computerSelection == "rock" && playerSelection == "scissors") {
        userChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        winner = 'computer';
        Score();
        // result.textContent= "You Lose! Rock beats Scissors";
    }
    else if(computerSelection == "scissors" && playerSelection == "rock") {
        userChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        winner = 'user';
        Score();
        // result.textContent = "You Win ! Rock beats Scissors";
    }
    else if(computerSelection == "paper" && playerSelection == "rock") {
        userChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        winner = 'computer';
        Score();
        // result.textContent = "You Lose! Paper beats Rock";
    }
    else if(computerSelection == "rock" && playerSelection == "paper") {
        userChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        winner = 'user';
        Score();
        // result.textContent = "You Win ! Paper beats Scissors";
    }
    else if(computerSelection == "scissors" && playerSelection == "paper") {
        userChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        winner = 'computer';
        Score();
        // result.textContent = "You Lose! Scissors beat Paper";
    }
    else if(computerSelection == "paper" && playerSelection == "scissors") {
        userChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        winner = 'user';
        Score();
        // result.textContent = "You Win ! Scissors beat Paper";
    }
}
// window.addEventListener('onpress', press)