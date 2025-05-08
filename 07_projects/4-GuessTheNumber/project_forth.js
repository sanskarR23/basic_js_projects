let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const quitButton = document.querySelector('#quitButton');
const quitButtonBox = document.querySelector('.quit-button-box'); // Assuming there's a wrapper for quit button

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over... Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  const difference = Math.abs(guess - randomNumber);

  if (guess === randomNumber) {
    displayMessage(`Bingo!!!`);
    endGame();
  } else if (difference >= 20) { 
    if (guess < randomNumber) {
      displayMessage(`Number is too low.`);
    } else {
      displayMessage(`Number is too high.`);
    }
  } else if (difference < 20 && difference >= 10) { 
    if (guess < randomNumber) {
      displayMessage(`Number is low.`);
    } else {
      displayMessage(`Number is high.`);
    }
  } else { 
    if (guess < randomNumber) {
      displayMessage(`You're very close! Number is just a little low.`);
    } else {
      displayMessage(`You're very close! Number is just a little high.`);
    }
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
quitButton.addEventListener('click', function () {
  const confirmQuit = confirm('Are you sure you want to quit the game?');
  if (confirmQuit) {
      endGame();
      displayMessage('Game Quit. Random number was ' + randomNumber);
  }
});
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); // Disable the input
  submit.setAttribute('disabled', ''); // Disable the submit button
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  removeQuitButton(); // Remove the quit button after the game ends
  newGame(); // Function to handle restarting the game
}

function removeQuitButton() {
  // Remove the quit button from the DOM
  quitButtonBox.removeChild(quitButton);
}

// This function adds the quit button back into the DOM when starting a new game
function addQuitButton() {
  quitButtonBox.appendChild(quitButton); // Re-adding the quit button to the DOM
}

// This function handles restarting the game
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    // Reset the lowOrHi message when a new game starts
    lowOrHi.innerHTML = ''; // Clear the "Game Quit" or any result message
    
    // Start a new game
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled'); // Re-enable the input
    submit.removeAttribute('disabled'); // Re-enable the submit button
    startOver.removeChild(p); // Remove the "Start new Game" button
    playGame = true;
    addQuitButton(); // Re-add the quit button when starting a new game
  });
}
