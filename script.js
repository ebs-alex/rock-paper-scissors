

let options = ["Rock","Paper","Scissors"]

let player = playerChoice()
let cpu = cpuChoice()
playRound(player, cpu)




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
    return prompt("Rock, Paper or Scissors...","")
}

function playRound(player, cpu) {
    alert(player+" "+cpu)
}
