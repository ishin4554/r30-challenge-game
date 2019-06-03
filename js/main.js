function dq(selector) {
  return document.querySelector(selector);
}

let countStr = 0;
let countChar = 0;
let timer = 0;
let speed = 100;

function typingEffect() {
  if (countChar < strings[countStr].content.length) {
    dq('.board__content:last-child').innerHTML += strings[countStr].content.charAt(countChar);
    countChar++;
    timer = setTimeout(typingEffect, speed);
  } else if(countStr < strings.length - 1) {
    countStr++;
    countChar = 0;
    const item = document.createElement('div');
    item.className = 'board__content';
    if (strings[countStr].name === 'other') {
      item.classList.add('name--text');
    } else if (strings[countStr].name === 'system') {
      item.classList.add('system--text');
    } 
    dq('.board').append(item);
    typingEffect();
  }
}

typingEffect();


function stopTyping() {
  clearTimeout(timer);
}

function continueTyping() {
  typingEffect()
}

function showAllText() {
  speed = 0.5;
}

function replayText() {
  dq('.board').innerHTML = '<div class="board__content"></div>';
  countStr = 0;
  countChar = 0; 
  timer = 0; 
  speed = 100; 
  typingEffect();
}

dq('.controller__jump').addEventListener('click', showAllText);
dq('.controller__stop').addEventListener('click', stopTyping);
dq('.controller__continue').addEventListener('click', continueTyping);
dq('.controller__replay').addEventListener('click', replayText);
