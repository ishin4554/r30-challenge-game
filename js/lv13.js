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
    name: 'me',
    content: "Ｘ！你們是 NPC 只會竊竊私語嗎！？",
  },
  {
    name: 'other',
    content: "餅乾頭：......各位他是異世界人，我透過別的餅乾知道了這個訊息！",
  },
  {
    name: 'other',
    content: "餅乾頭：異世界人會造成我們的時間扭曲",
  },
  {
    name: 'other',
    content: "餅乾頭：每次派小餅乾鄰國送信的時候，如果送錯的時候都會馬上回來，但如果送信正確的話！都回來的比較慢！",
  },
  {
    name: 'other',
    content: "餅乾頭：而且小餅乾成功的越多，就越來越慢，這是不是很不科學！",
  },
  {
    name: 'me',
    content: "這只是某種新型態的拖延症吧！？",
  },
  {
    name: 'system',
    content: `[系統] 前往 lv14: 請拿四碼數字測試看看送信人的拖延症，直到找出正確的密碼出來`,
  },
];

const type = new Type(strings)
type.typingEffect();