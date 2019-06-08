let strings = [
  {
    name: 'me',
    content: "打開網站的時候，突然螢幕發出一道白光",
  },
  {
    name: 'other',
    content: "謎之聲: 你已經死了......（小聲）不對，咳咳......還是別這樣開場好了（小聲）",
  },
  {
    name: 'me',
    content: "腦子裡突然浮現一個說著奇怪的話的聲音",
  },
  {
    name: 'other',
    content: "m3nT0r: 魔法師呦！我是女神 m3nT0r，你我曾經在純白一片的網站中相遇 ......",
  },
  {
    name: 'me',
    content: "這有比你已經死了好嗎？？？話說我明明就修著 Huli 老師的課怎麼突然就 ......",
  },
  {
    name: 'other',
    content: "m3nT0r : 不要慌張，我只是想要請你幫個小忙！",
  },
  {
    name: 'me',
    content: "你跟上次圖書館是串通好的吧 ......",
  },
  {
    name: 'other',
    content: "m3nT0r : 沒有錯，但這次是另外一個世界需要你拯救",
  },
  {
    name: 'me',
    content: "敢情你們還真的是串通好的（＃",
  },
  {
    name: 'other',
    content: `m3nT0r : 我們需要你運用你的知識，辨認出各地的怪物，用 token 告訴我們怪物的資訊讓我們可以進行處理！
    現在給你一個 token {r30:start} 利用這個 token 快點過去吧，有一個地方已經十萬火急了。`,
  },
  {
    name: 'me',
    content: "聲音突然又從腦子裡消失",
  },
  {
    name: 'system',
    content: "[系統] 得到技能 token: 在網址上用 query string 傳入 token 就可以傳達怪物的資訊給女神 m3nT0r",
  },
  {
    name: 'system',
    content: "[系統] 例如： /lv1.php?token=xxx，xxx 不包含大括號",
  },
  {
    name: 'system',
    content: "[系統] 得到技能 hint: 利用 help 可以縮小 token 所在的範圍",
  },
  {
    name: 'system',
    content: "[系統] 例如： /lv1.php?hint=help",
  },
  {
    name: 'system',
    content: "[系統] 前往 lv1 : 請透過 query string 傳入 token",
  },
];

const type = new Type(strings)
type.typingEffect();
