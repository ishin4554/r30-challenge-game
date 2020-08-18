let strings = [
  {
    name: 'me',
    content: "嗚哇，時間扭曲的好嚴重！",
  },
  {
    name: 'me',
    content: '但是不要小看異世界人啊，異世界人什麼都沒有，偏偏懸疑跟解密恰好都是異世界人的專長呢',
  },
  {
    name: 'other',
    content: '弄臣：如果您能夠避免掉時間扭曲，我們會奉您為異世界的王！',
  },
  {
    name: 'me',
    content: '不 ... 不用了，我覺得我差不多要看到日出了。',
  },
  {
    name: 'other',
    content: '弄臣：那 ... 您想要什麼作為避免時間扭曲的回報？',
  },
  {
    name: 'me',
    content: '反正也沒什麼損失，就給我一個解開問題後的好眠吧。',
  },
  {
    name: 'me',
    content: '打開吧！Dev Tools !',
  },
  {
    name: 'system',
    content: `[系統] 前往 lv15: 請解開畫面中的時間密碼，校正異世界的座標軸`,
  },
];

function checkTime(sec) {
  if (sec < 10) {
    sec = "0" + sec;
  }
  return sec;
}

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

const type = new Type(strings)
type.typingEffect();