let strings = [
  {
    name: 'me',
    content: "（可惡這個委託 TAT 看我還不帶一波）",
  },
  {
    name: 'me',
    content: "各位，千萬別被假新聞給騙了！你們看，我可以看到領主的留言！",
  },
  {
    name: 'other',
    content: "弄臣：$%^&*))(*&^%$%^&（七嘴八舌中）",
  },
  {
    name: 'me',
    content: "我們有共同的敵人",
  },
  {
    name: 'me',
    content: "不應該在這邊虛耗",
  },
  {
    name: 'me',
    content: "你們看（突然玻璃發出巨響，一顆黑色子彈涉入會場）",
  },
  {
    name: 'other',
    content: "弄臣：小心！有小餅乾！（大家開始尋找掩護點）",
  },
  {
    name: 'me',
    content: "等等，不應該是狙擊嗎......",
  },
  {
    name: 'system',
    content: `[系統] 前往 lv13: 打倒小餅乾`,
  },
];

const type = new Type(strings)
type.typingEffect();