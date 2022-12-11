'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 12;

// for input field, use 'value' property instead of 'textContent'
document.querySelector('.guess').value = 17;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const setMessageContent = function (message) {
  document.querySelector('.message').textContent = message;
};

// log input number when click check button
// addEventListener takes the event to listen for
// and a function value (expression) that will be called when the event is triggered
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No valid input
  if (!guess) {
    setMessageContent('⛔ No number!');

    // Correct guess
  } else if (guess === secretNumber) {
    setMessageContent('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Rules for manipulating CSS from JS:
    // - use 'style' property
    // - use camel case
    // - value needs to be a string
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      setMessageContent(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      setMessageContent('💥 You lost the game');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
  /*  REFACTOR OUT THE BELOW
  // Guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      score = 0;
      document.querySelector('.score').textContent = score;
    }

    // Guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } */
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  setMessageContent('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  //  document.querySelector(''). = '#222';
});
