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
  }
  
  continueTyping() {
    this.typingEffect()
  }
  
  showAllText() {
    this.speed = 0.5;
  }
  
  replayText() {
    dq('.board').innerHTML = '<div class="board__content"></div>';
    this.countStr = 0;
    this.countChar = 0; 
    this.timer = 0; 
    this.speed = 100; 
    this.typingEffect();
  }
}

dq('.controller').addEventListener('click', (evt) => {
  switch(evt.target.className) {
    case 'controller__jump':
      type.showAllText();
      break;
    case 'controller__stop':
      type.stopTyping();
      break;  
    case 'controller__continue':
      type.continueTyping();
      break;  
    case 'controller__replay':
      type.replayText();
      break;  
    default:
      break;
  }
})
