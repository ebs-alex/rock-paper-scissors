
let amountToWin = parseInt(prompt("first to how many wins?", "3"))


const score = document.querySelector('#score');
let playerScore = 0
let cpuScore = 0

let options = ["Rock","Paper","Scissors"]
const selections = document.querySelectorAll(".selection")
selections.forEach( selection => {
    selection.addEventListener('click', () => setPlayerSelection(selection.textContent))
})
const playerSelection = document.querySelector("#playerSelection")
const cpuSelection = document.querySelector("#cpuSelection")

const result = document.querySelector("#result")

let toWin = document.querySelector("#toWin")
toWin.textContent = `First to ${amountToWin}, wins.`






// game()



    ///function declarations

function random(number) {
    return Math.floor(Math.random() * number);
  }

function setCpuChoice() {
    let index = random(options.length);
    let cpuMove = options[index];
    cpuSelection.textContent = `CPU chose ... ${cpuMove}`
    return cpuMove
}

function setPlayerSelection(selection) {
    playerSelection.textContent = `You chose ... ${selection}`
    let cpu = setCpuChoice()
    assessRound(selection, cpu)
}

function assessRound(player, cpu) {
    // alert(`You chose: ${player},\nCPU chose: ${cpu}`)
    if (player == "Rock") {
        switch (cpu) {
            case "Rock":
                assignWin("tie")
                break;
            case "Paper":
                assignWin("CPU")
                break;
            case "Scissors":
                assignWin("PLAYER")
                break;
        }
    } else if (player == "Paper") {
        switch (cpu) {
            case "Rock":
                assignWin("PLAYER")
                break;
            case "Paper":
                assignWin("tie")
                break;
            case "Scissors":
                assignWin("CPU")
                break;
        }
    } else if (player == "Scissors") {
        switch (cpu) {
            case "Rock":
                assignWin("CPU")
                break;
            case "Paper":
                assignWin("PLAYER")
                break;
            case "Scissors":
                assignWin("tie")
                break;
        }
    } else {
        alert("CANCELLED")
    }
}

function assignWin(winner) {
    if (winner != "tie") {
        result.textContent = `${winner} wins the round`
        if (winner == "PLAYER") {
            ++playerScore
            displayScore()
            assessGame()
            result.style.color = "lightgreen"
        } else {
            ++cpuScore
            displayScore()
            assessGame()
            result.style.color = "red"
        }
    } else {
        result.textContent = "Tie"
        result.style.color = "white"
        displayScore()
        assessGame()
    }
}

function displayScore () {
    score.innerHTML = `Player Score: ${playerScore}<br>CPU Score: ${cpuScore}`
}

function assessGame() {
    if (playerScore == amountToWin) {
        alert("Player wins it all")
        // toWin.textContent = "Player wins it all"
        // toWin.style.color = "lightgreen"
        resetGame()
    } else if (cpuScore == amountToWin) {
        alert("CPU wins it all")
        // toWin.textContent = "CPU wins it all"
        // toWin.style.color = "red"
        resetGame()
    }

}

function resetGame() {
    playerScore = 0
    cpuScore = 0
    score.innerHTML = ''
    result.textContent = ''
    playerSelection.textContent = ''
    cpuSelection.textContent = ''
    result.style.color = "white"


    ///comeback to fix -- prompt is not allowing final score to display 
    // amountToWin = parseInt(prompt("first to how many wins?", "3"))

    toWin.textContent = `First to ${amountToWin}, wins.`
    toWin.style.color = "white"
}
