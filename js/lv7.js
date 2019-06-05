let strings = [
  {
    name: 'me',
    content: "（找到了 window 的真相後，到了 window 的城堡之中）",
  },
  {
    name: 'other',
    content: "小惡魔：你是誰！",
  },
  {
    name: 'me',
    content: "我是勇者！",
  },
  {
    name: 'other',
    content: "小惡魔：原來是魔法師嗎？此地不歡迎你，滾一邊去。",
  },
  {
    name: 'me',
    content: "......我不是魔法師（小聲）總之快讓我過去已經半夜三點了！",
  },
  {
    name: 'other',
    content: "小惡魔：我讓你過去有什麼好處",
  },
  {
    name: 'me',
    content: "不然......要不要嚐嚐異世界的美食？",
  },
  {
    name: 'other',
    content: "你是想賄賂我？",
  },
  {
    name: 'me',
    content: "怎麼會哈哈哈哈哈哈",
  },
  {
    name: 'system',
    content: "[系統] 請找到放在包包深處的餅乾 token",
  },
];

const type = new Type(strings)
type.typingEffect();