let strings = [
  {
    name: 'me',
    content: "（看著手上的武器，我的心情無比滄桑）",
  },
  {
    name: 'system',
    content: "[系統] 得到一本 ECMAScript",
  },
  {
    name: 'me',
    content: "ㄏㄏ這下真的成為魔法師了",
  },
  {
    name: 'other',
    content: "m3nt0r: 恭喜你得到武器，接下來的挑戰會更加艱難，只靠 devtool man 的稱號可能是撐不過去的",
  },
  {
    name: 'me',
    content: "啊啊啊啊啊從魔法師進化成工具人了",
  },
  {
    name: 'other',
    content: "m3nt0r: 異世界就拜託你了（一聲巨響城堡們轟隆隆地開啟）",
  },
  {
    name: 'me',
    content: "......（走進城堡的巨門)",
  },
  {
    name: 'me',
    content: "(一陣天旋地轉又出現在城堡門口)",
  },
  {
    name: 'me',
    content: "......",
  },
  {
    name: 'me',
    content: "......（走進城堡的巨門)",
  },
  {
    name: 'me',
    content: "(一陣天旋地轉又出現在城堡門口)",
  },
  {
    name: 'me',
    content: "這是 bug 嗎？",
  },
  {
    name: 'other',
    content: "石像：（一旁的石像抖動笑了起來）噗噗，你看起來不像異世界人 >3<",
  },
  { 
    name: 'me',
    content: "......對，我不小心轉生成了工具人。"
  },
  {
    name: 'other',
    content: "石像：轉生成工具人是否搞錯了什麼 (*´ω`) 這樣你要有身份證明才行～",
  },
  {
    name: 'system',
    content: "[系統] 前往 lv11: 請找出放在 json 檔裡面的密碼進入城堡",
  },
];

fetch('https://github.com/ishin4554/r30challenge_json/blob/master/r30.json')
  .then(res => res.json())
  .then(data => console.log(data))

const type = new Type(strings)
type.typingEffect( );