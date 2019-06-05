let strings = [
  {
    name: 'me',
    content: "（無頭騎士很開心的放我過去了）",
  },
  {
    name: 'me',
    content: "呼，會把帳號取叫 headshot 的人也是不錯中二了啦",
  },
  {
    name: 'other',
    content: "m3nt0r: 在城堡裡還好嗎？",
  },
  {
    name: 'me',
    content: "（嚇到）Ｘ，嚇死人了，我已經走到城堡深處了啦！",
  },
  {
    name: 'other',
    content: "m3nt0r: 不錯不錯，接下來的戰鬥會很艱辛，我給你一個選武器的機會",
  },
  {
    name: 'me',
    content: "為什麼不早說！！！比起智力解，暴力解比較快啊！",
  },
  {
    name: 'other',
    content: "m3nt0r: 但因為我很久沒有打掃了，你的武器不是 gun 也不是 sword，我只記得我放在 table challenger 下 weapon 這個欄位裡",
  },
  {
    name: 'me',
    content: "也太混亂了吧？",
  },
  {
    name: 'other',
    content: "m3nt0r: 你再告訴我可能在哪裡，我馬上傳給你～ 啊，只要武器，不要其他一堆雜物喔",
  },
  {
    name: 'system',
    content: "[系統] 前往 lv10: 請把找到武器的「最短」 SQL 語法的每一個字的第一個字母合在一起用 token 傳給 m3nt0r",
  },
];

const type = new Type(strings)
type.typingEffect();