const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDiplay = document.getElementById('result')

const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoice.length) // or you can use 3 because of the amount of choices
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw'
    }
    
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win'
    }
    
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you loss'
    }
    
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose'
    }
    
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win'
    }
    
    if (computerChoice === 'scissors'&& userChoice === 'rock') {
        result = 'you win'
    }
    
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you loss'
    }
    resultDiplay.innerHTML = result
}