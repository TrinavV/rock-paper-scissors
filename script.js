function getComputerChoice(){
    let randomNum = Math.floor((Math.random()*3) +1);
    switch(randomNum) {
        case 1:
            return "rock";
                    
        case 2:
            return "paper";
                        
        case 3:
            return "scissors";
                   
    }
}

function getHumanChoice() {
    let userChoice = prompt(`Enter Rock, Scissors or Paper`).toLowerCase();
    if (userChoice === "rock" || userChoice ==="scissors" || userChoice==="paper") {
        return userChoice;               
    } else {
        return null;
        
    }
}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice,computerChoice) {
    if (humanChoice===computerChoice) {
        console.log("Its a draw, You both picked the same one");
    } else if (humanChoice == null) {
        console.log("Your input was wrong. Please input either rock, paper or scissors");

    } else if (humanChoice === "rock" && computerChoice === "scissors"
                || humanChoice === "scissors" && computerChoice === "paper" 
                || humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!!`);
        humanScore ++;
        console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
        

    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice} !!`);
        computerScore++;
        console.log(`Your score: ${humanScore}, || Computer score: ${computerScore}`);
    }

}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice,computerChoice);




