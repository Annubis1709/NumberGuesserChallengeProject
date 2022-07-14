let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const secretNumber = generateTarget();
const getAbsoluteDistance = (targetNumber, guessNumber) => Math.abs(targetNumber - guessNumber);

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
    if (humanGuess >= 0 && humanGuess <= 9) {
        const distUser =  getAbsoluteDistance(secretNumber, humanGuess);
        const distComputer = getAbsoluteDistance(secretNumber, computerGuess);
        return (distUser <= distComputer);
    } else {
        alert('Sorry, your number is out of range. ' +
            'Please digit a number between 0 and 9');
    }
};

const updateScore = (winner) => {
    (winner === 'human')? humanScore++ : computerScore++
};

const advanceRound = () => currentRoundNumber++;