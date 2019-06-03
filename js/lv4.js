let strings = [
  {
    name: 'me',
    content: "(biu 輕輕的一聲 8bit 雷射槍音效再度從耳邊閃過) ",
  },
  {
    name: 'me',
    content: "( 水底一陣翻攪，comment 浮出來一陣掙扎)",
  },
  {
    name: 'other',
    content: "// {tRaNspar3nT} 好不容易，我好不容易才找到這個地方！",
  },
  {
    name: 'me',
    content: "( comment 用 comment 怒吼著) ",
  },
  {
    name: 'me',
    content: "明明是 html comment 為什麼要用 javascript comment  說話？？",
  },
  {
    name: 'other',
    content: "// {tRaNspar3nT} 怎......怎樣，少說廢話，區區單身魔法師，看我的替身攻擊。",
  },
  {
    name: 'me',
    content: "誰...誰單身了！可惡，名字都寫在臉上了，看我還不幹死你！",
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
  } else if(countStr === strings.length - 1) {
    const item = document.createElement('div');
    item.className = 'board__content';
    item.classList.add('system--text');
    item.innerHTML='[系統] 請找出 <span class="special">{csspersona!}</span> 真正的名字';
    dq('.board').append(item);
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