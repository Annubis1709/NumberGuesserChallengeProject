let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const secretNumber = generateTarget();
const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
    const difUser =  Math.abs(secretNumber - humanGuess);
    const difComputer = Math.abs(secretNumber - computerGuess);
    return (difUser <= difComputer);
};

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;