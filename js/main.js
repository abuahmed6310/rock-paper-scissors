const images = Array.from(document.querySelectorAll('.card-image'));
const message = document.querySelector('.result');
const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');
const selectionPlayer = document.querySelector('.player-log');
const selectionComputer = document.querySelector('.computer-log');
const rounds = document.querySelector('.rounds-log');

let playerScore = 0;
let computerScore = 0;
let round = 0;
let computerChoices = ['Rock', 'Paper', 'Scissors'];

// Start Game when user clicks on an image
images.forEach((image) =>
  image.addEventListener('click', () => {
    if (playerScore >= 5 || computerScore >= 5) {
      return;
    }
    game(image.dataset.image);
  })
);

function getComputerSelection() {
    let computerNumber = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[computerNumber];
}


function playRound(playerSelection, computerSelection) {
    let log = '';
  
    if (playerSelection === 'Rock') {
      if (computerSelection === 'Paper') {
        log = 'You Lose! Paper beats Rock';
        computerScore++;
      } else if (computerSelection === 'Scissors') {
        log = 'You Win! Rock beats Scissors';
        playerScore++;
      } else {
        log = "It's a tie";
      }
    } else if (playerSelection === 'Paper') {
      if (computerSelection === 'Scissors') {
        log = 'You Lose! Scissors beats Paper';
        computerScore++;
      } else if (computerSelection === 'Rock') {
        log = 'You Win! Paper beats Rock';
        playerScore++;
      } else {
        log = "It's a tie";
      }
    } else if (playerSelection === 'Scissors') {
      if (computerSelection === 'Rock') {
        log = 'You Lose! Rock beats Scissors';
        computerScore++;
      } else if (computerSelection === 'Paper') {
        log = 'You Win! Scissors beats Paper';
        playerScore++;
      } else {
        log = "It's a tie";
      }
    }
  
    round++;
    return log;
  }

  

function createParagWithText(text) {
    const p = document.createElement('p');
    p.textContent = text;
  
    return p;
  }


  function game(playerSelect) {
    let playerSelection = capitalize(playerSelect);
    let computerSelection = getComputerSelection();
  
    let roundResult = playRound(playerSelection, computerSelection);
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
    message.textContent = roundResult;
    rounds.appendChild(createParagWithText(round));
    selectionPlayer.appendChild(createParagWithText(playerSelection));
    selectionComputer.appendChild(createParagWithText(computerSelection));
  
    if (playerScore >= 5 && computerScore < 5) {
      message.textContent = 'Game Over. You Win!';
    } else if (playerScore < 5 && computerScore >= 5) {
      message.textContent = 'Game Over. You Lose!';
    }
  }

  function capitalize(string) {
    return (
      string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
    );
  }