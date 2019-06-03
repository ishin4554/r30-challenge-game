let strings = [
  {
    name: 'me',
    content: "？？？？？",
  },
  {
    name: 'system',
    content: "[系統] Game Over ",
  },
  {
    name: 'me',
    content: "輸了？？？我記得剛剛也是一陣傳送的白光",
  },
  {
    name: 'me',
    content: "等等第五關呢？難道剛剛 css 替身開了掛了？",
  },
  {
    name: 'me',
    content: "讓我找出你的把戲！",
  },
];

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
function showAllText() {
  speed = 0.5;
}
dq('.controller__jump').addEventListener('click', showAllText);

