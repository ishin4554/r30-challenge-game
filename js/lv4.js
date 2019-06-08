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
    content: "誰...誰單身了！可惡，人不可以只看表面！要重視內在！眼見不一定為真好嗎！？",
  },
];

class lv4Type extends Type {
  constructor(strings) {
    super(strings);
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
    } else if(this.countStr === this.strings.length - 1) {
      const item = document.createElement('div');
      item.className = 'board__content system--text';
      item.innerHTML='[系統] token <span class="special">{csspersona!}</span> 已經給你了';
      dq('.board').append(item);
      dq('.controller__replay').classList.toggle('hide');
    }
  }
}

const type = new lv4Type(strings);
type.typingEffect();