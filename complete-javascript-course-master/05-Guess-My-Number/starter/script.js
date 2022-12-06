'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 12;

// for input field, use 'value' property instead of 'textContent'
document.querySelector('.guess').value = 17;
console.log(document.querySelector('.guess').value);
