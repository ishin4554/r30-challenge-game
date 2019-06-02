
<!DOCTYPE html>
<html>
  <head>
    <title>start: 畫面一片白色</title>
    <meta charset="utf-8" />
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <?php
      echo "<h1>Re: Start - 從零開始的異世界</h1>";
      echo "<div class='dialogue'>";
      echo "<div class='dialogue__text'></div>";
      echo "<div class='controller'>";
      echo "<div class='btn stop tbc'>暫停</div>";
      echo "<div class='btn restart'>重播</div>";
      echo "</div>";
      echo "</div>";
    ?>
  <script>
    let count = 0;
    let lv1 = {
      strings: [
        "才按下開始遊戲的時候，突然螢幕發出一道白光",
        "<b>迷之聲：</b>你已經死了......（小聲）不對，咳咳......還是別這樣開場好了（小聲）",
        "腦子裡突然浮現一個說著奇怪的話的聲音",
        "<b>m3nt0r 女神:</b>魔法師呦！我是女神 m3nT0r，你我曾經在純白一片的網站中相遇 ......",
        "這有比你已經死了好嗎？？？話說我明明就修著 Huli 老師的課怎麼突然就 ......",
        "（太多槽點了，不知道要從哪裡吐起 ......）",
        "<b>迷之聲：</b>不要慌張，我只是想要請你幫個小忙！",
        "你跟上次圖書館是串通好的吧 ......",
        "<b>迷之聲：</b>沒有錯，但這次是另外一個世界需要你拯救",
        "(敢情你們還真的是串通好的（＃)",
        "<b>迷之聲：</b>我們需要你運用你的知識，辨認出各地的怪物，用 token 告訴我們怪物的資訊讓我們可以進行處理！",
        "<b>迷之聲：</b>現在給你一個 token {r30:start} 利用這個 token 快點過去吧，有一個地方已經十萬火急了。",
        "聲音突然又從腦子裡消失",
        "得到兩個技能",
        "技能 token: 在網址上用 query string 傳入 token 就可以傳達怪物的資訊給女神 m3nT0r",
        "例如：/lv1.php?token=xxx",
        "技能 hint: 可以縮小 token 所在的範圍",
        "例如: /lv1.php?hint=magic",
        "通往 lv1 : 用 GET method 傳送 {r30:start} token",
      ],
      typeSpeed: 60,
      smartBackspace: false,
      showCursor: false,
    }
    var typed = new Typed(".dialogue__text", lv1);
    let btn = document.querySelector('.tbc');
    btn.addEventListener('click', () => {
      typed.toggle();
      btn.classList.toggle('stop');
      if (btn.innerText === '暫停') {
        btn.innerText = '繼續';
      } else {
        btn.innerText = '暫停';
      }
    })
    document.querySelector('.restart').addEventListener('click', () => {
      typed.reset(true);
    });
  </script>
  </body>
</html>