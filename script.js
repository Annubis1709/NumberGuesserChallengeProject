let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const secretNumber = generateTarget();
const getAbsoluteDistance = (targetNumber, guessNumber) => Math.abs(targetNumber - guessNumber);

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
    const diffUser =  getAbsoluteDistance(secretNumber, humanGuess);
    const diffComputer = getAbsoluteDistance(secretNumber, computerGuess);
    return (diffUser <= diffComputer);
};

const updateScore = (winner) => {
    (winner === 'human')? humanScore++ : computerScore++
};

const advanceRound = () => currentRoundNumber++;