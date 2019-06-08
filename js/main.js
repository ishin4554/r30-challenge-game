let isStop = false;

function scroll(){
  var elem = document.querySelector('.board');
  elem.scrollTop = elem.scrollHeight;
}

function dq(selector) {
  return document.querySelector(selector);
}

class Type {
  constructor(strings){
    this.strings = strings
    this.countStr = 0;
    this.countChar = 0;
    this.timer = 0;
    this.speed = 100;
  }
  typingEffect() {
    if (this.countChar < this.strings[this.countStr].content.length) {
      dq('.board__content:last-child').innerHTML += this.strings[this.countStr].content.charAt(this.countChar);
      this.countChar++;
      this.timer = setTimeout(this.typingEffect.bind(this), this.speed);
    } else if(this.countStr < this.strings.length - 1) {
      this.countStr++;
      this.countChar = 0;
      const item = document.createElement('div');
      item.className = 'board__content';
      this.switchStyle(item);
      dq('.board').append(item);
      this.typingEffect();
      scroll();
    } else if (this.countStr === this.strings.length - 1) {
      dq('.controller__replay').classList.toggle('hide');
    }
  }

  switchStyle(item){
    switch(strings[this.countStr].name){
      case 'other':
        item.classList.add('name--text');
        break;
      case 'system':
        item.classList.add('system--text');
        break;
      default: 
        break;
    }
  }

  stopTyping() {
    clearTimeout(this.timer);
    dq('.controller__stop').innerText = '繼續對話';
    isStop = true;
  }
  
  continueTyping() {
    dq('.controller__stop').innerText = '暫停對話';
    isStop = false;
    this.typingEffect();
  }
  
  showAllText() {
    this.speed = 0.5;
  }
  
  replayText() {
    dq('.controller__replay').classList.toggle('hide');
    dq('.board').innerHTML ='<div class="board__content"></div>';
    this.countStr = 0;
    this.countChar = 0; 
    this.timer = 0; 
    this.speed = 100; 
    isStop = false;
    dq('.controller__stop').innerText = '暫停對話';
    this.typingEffect();
  }
}

dq('.controller').addEventListener('click', (evt) => {
  switch(evt.target.className) {
    case 'controller__jump':
      type.showAllText();
      break;
    case 'controller__stop':
      if (isStop) {
        type.continueTyping();
      } else {
        type.stopTyping();
      }
      break;  
    case 'controller__replay':
      type.replayText();
      break;  
    default:
      break;
  }
})
