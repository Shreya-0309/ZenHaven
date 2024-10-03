// Get elements
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.getElementById("result");
const choices = document.querySelectorAll(".choice");

let userScore = 0;
let computerScore = 0;

// Game logic
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.textContent = `User: ${userScore}`;
    result_p.textContent = `${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}. You win!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.textContent = `Computer: ${computerScore}`;
    result_p.textContent = `${computerChoice.toUpperCase()} beats ${userChoice.toUpperCase()}. You lose!`;
}

function draw(userChoice, computerChoice) {
    result_p.textContent = `It's a draw! You both chose ${userChoice.toUpperCase()}.`;
}

// Event listeners for user choices
choices.forEach(choice => {
    choice.addEventListener('click', function () {
        playRound(this.id);
    });
});
