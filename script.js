

let options = ["rock","paper","scissors"]
let playerScore = 0
let cpuScore = 0

let amountToWin = parseInt(prompt("first to how many wins?", "3"))

game()



///function declarations

function random(number) {
    return Math.floor(Math.random() * number);
  }

function cpuChoice() {
    let index = random(options.length);
    let cpuMove = options[index];
    // alert(cpuMove)
    return cpuMove;
}

function playerChoice() {
    return prompt("Rock, Paper or Scissors...","").toLowerCase()
}

function playRound(player, cpu) {
    alert(`You chose: ${player},\nCPU chose: ${cpu}`)
    if (player == "rock") {
        switch (cpu) {
            case "rock":
                assignWin("tie")
                break;
            case "paper":
                assignWin("cpu")
                break;
            case "scissors":
                assignWin("player")
                break;
        }
    } else if (player == "paper") {
        switch (cpu) {
            case "rock":
                assignWin("player")
                break;
            case "paper":
                assignWin("tie")
                break;
            case "scissors":
                assignWin("cpu")
                break;
        }
    } else if (player == "scissors") {
        switch (cpu) {
            case "rock":
                assignWin("cpu")
                break;
            case "paper":
                assignWin("player")
                break;
            case "scissors":
                assignWin("tie")
                break;
        }
    } else {
        alert("CANCELLED")
    }
}

function assignWin(winner) {
    if (winner != "tie") {
        alert(`${winner} wins`)
        if (winner == "player") {
            ++playerScore
            displayScore()
        } else {
            ++cpuScore
            displayScore()
        }
    } else {
        alert("Tie")
        displayScore()
    }
}

function displayScore () {
    alert(`Player Score: ${playerScore}, \nCPU Score: ${cpuScore}`)
}

function game() {
    while (playerScore < amountToWin && cpuScore < amountToWin) {
        let player = playerChoice()
        let cpu = cpuChoice()
        playRound(player, cpu)
        console.log(playerScore)
    }

    if (playerScore == amountToWin) {
        alert("Player wins the game!");
    } else {
        alert("CPU wins the game!");
    }

}
