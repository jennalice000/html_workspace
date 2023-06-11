// Array of words
const words = [
    'apple',
    'banana',
    'cherry',
    'orange',
    'mango',
    // Add more words here
  ];
  
  let currentWord; // Current word to be typed
  let score = 0; // Player's score
  let isPlaying = false; // Flag to track game status
  
  // DOM elements
  const wordDisplay = document.getElementById('word');
  const inputField = document.getElementById('input');
  const scoreDisplay = document.getElementById('score');
  const timeDisplay = document.getElementById('time');
  const startButton = document.getElementById('start');
  
  // Function to initialize the game
  function initGame() {
    isPlaying = true;
    score = 0;
    scoreDisplay.textContent = 'Score: 0';
    displayWord();
    inputField.focus();
  }
  
  // Function to display a random word
  function displayWord() {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randIndex];
    wordDisplay.textContent = currentWord;
  }
  
  // Event listener for the start button
  startButton.addEventListener('click', () => {
    if (!isPlaying) {
      initGame();
    }
  });
  
  // Event listener for input field
  inputField.addEventListener('input', () => {
    if (isPlaying) {
      if (inputField.value === currentWord) {
        score++;
        scoreDisplay.textContent = 'Score: ' + score;
        inputField.value = '';
        displayWord();
      }
    }
  });
  
  