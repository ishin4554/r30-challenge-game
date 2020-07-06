let strings = [
  {
    name: 'other',
    content: "警備：抓到小餅乾的頭頭了！",
  },
  {
    name: 'other',
    content: "餅乾頭：放開我！（被壓著進到會議室）",
  },
  {
    name: 'me',
    content: "（拔出滲血處的巧克力豆）我最不喜歡濕濕軟軟的巧克力豆餅乾了......",
  },
  {
    name: 'other',
    content: "弄臣：^&*&^&*(（竊竊私語）",
  },
  {
    name: 'other',
    content: "餅乾頭：......各位他是異世界人，我透過別的餅乾知道了這個訊息！",
  },
  {
    name: 'other',
    content: "弄臣：^&*&^&*(（竊竊私語）",
  },
  {
    name: 'me',
    content: "我是異世界人又怎麼樣！",
  },
  {
    name: 'other',
    content: "餅乾頭：異世界人會造成我們的世界座標歪曲，大家快看，時間已經越來越慢了！",
  },
  {
    name: 'me',
    content: "？？？？",
  },
  {
    name: 'system',
    content: `[系統] 前往 lv14: 請解開留在 lv14 裡面的密碼，可以反覆輸入 token，直到輸入正確的 token`,
  },
];

const type = new Type(strings)
type.typingEffect();