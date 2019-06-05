let strings = [
  {
    name: 'me',
    content: "又是一陣白光",
  },
  {
    name: 'me',
    content: "再睜開眼，是一個混亂的市集，衝過我旁邊的村民講著我聽不懂的語言",
  },
  {
    name: 'system',
    content: "[系統] 傳送到了新的小鎮",
  },
  {
    name: 'other',
    content: "100101001001100001110",
  },
  {
    name: 'me',
    content: "這是在 ...... 求救嗎？",
  },
  {
    name: 'me',
    content: "（一個村民死死地抓著我說著一句話）",
  },
  {
    name: 'me',
    content: "完全聽不懂啊，難道他在告訴我怪物的名字？",
  },
  {
    name: 'other',
    content: "100101001001100001110",
  },
  {
    name: 'me',
    content: "但這個語言，我似乎見過，我要趕快把怪物的名字用正常的語言傳給女神才行",
  },
  {
    name: 'system',
    content: '[系統] 前往 lv2: 透過 token 將怪物的名字轉成十八進位傳給 m3nt0r',
  },
];

const type = new Type(strings)
type.typingEffect();