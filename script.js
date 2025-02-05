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
    let userChoice = prompt(`Enter "R" for Rock, "S" for Scissors, "P" for Paper`);
    if (userChoice === "R" || userChoice === "S" || userChoice=== "P") {
        console.log(userChoice);
        return userChoice;               
    } else {
        console.log("Invalid choice");
        return "Invalid Choice";
        
    }
}


