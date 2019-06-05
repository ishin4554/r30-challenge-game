let strings = [
  {
    name: 'me',
    content: "(biu 輕輕的一聲 8bit 雷射槍音效從耳邊閃過) ",
  },
  {
    name: 'me',
    content: "(水中一個 div 開始掙扎死掉）",
  },
  {
    name: 'me',
    content: "呼，這下終於可以休息了",
  },
  {
    name: 'system',
    content: "[系統] 又有一個村民死亡",
  },
  {
    name: 'me',
    content: "!!!! 為什麼，難道剛剛那個不是真正的罪魁禍首嗎？",
  },
  {
    name: 'me',
    content: "(我又回去看井水的水面，還是一片黑)",
  },
  {
    name: 'system',
    content: "[系統] 前往 lv4: 請找出潛藏在瀏覽器中的第二個怪物",
  },
];

const type = new Type(strings)
type.typingEffect();