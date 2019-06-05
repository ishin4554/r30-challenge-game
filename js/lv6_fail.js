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
  {
    name: 'system',
    content: "[系統] 前往 lv6：找出跳關的把戲，得到 token",
  },
];

const type = new Type(strings)
type.typingEffect();

