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
    content: "m3nt0r: 你喜歡暴力解？早說，那找出武器的工作就交給你了！這裡有一堆混亂的程式碼，解開來才有武器",
  },
  {
    name: 'me',
    content: "這還是智力解啊？",
  },
  {
    name: 'other',
    content: "m3nt0r: 也不是不能暴力解",
  },
  {
    name: 'system',
    content: "[系統] 前往 lv10: 請解開留在 html 裡面的程式碼，輸入正確的 token",
  },
];

const type = new Type(strings)
type.typingEffect();