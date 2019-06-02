
<!DOCTYPE html>
<html>
  <head>
    <title>lv2: 畫面一片透明</title>
    <meta charset="utf-8" />
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/lv2.css" />
  </head>
  <body>
    <?php
      $token = $_GET['token'];
      if($token !== 'BAD18'){
        echo "<pre>
             > 腦子裡又浮出 m3nT0r 的聲音
            「請使用正確的正確的 token 呦，不然沒辦法到異世界 <3 」
            </pre>";
      } else {
        echo "<h1>lv2 鎮</h1>";
        echo "<div class='HiddenMonster'>{divsurprise}</div>";
        echo "<div class='dialogue'>";
        echo "<div class='dialogue__text'></div>";
        echo "<div class='controller'>";
        echo "<div class='btn stop tbc'>暫停</div>";
        echo "<div class='btn restart'>重播</div>";
        echo "</div>";
        echo "</div>";
      }
    ?>
  <script>
    let count = 0;
    let lv2 = {
      strings: [
        "(來自 m3nT0r 的狙擊圍繞在我身旁)",
        "(人群中有幾個村民露出了 string 的樣子，蒸發在光線裡）",
        "(人們都停下了腳步，圍觀著我）",
        "這是在 ...... 求救嗎？ （一個村民死死地抓著我說著一句話）",
        "<b>村民：</b> 謝謝你，勇者",
        "ㄏㄏ",
        "<b>村民：</b> 雖然很想要慶祝，但女神說你很趕時間，隔壁村子水源遭到了污染，快去救救他們",
        ".....混帳女神",
        "(於是在人們的簇擁下被快馬加鞭趕到了隔壁村，各個村民東倒西歪在路旁。)",
        "怎麼回事！",
        "<b>村民：</b> 水，有毒！",
        "(一個倒在路邊的村民抓著我的褲腳，說完這句話就暈了過去)",
        "(我馬上衝到村中央的井水之中)",
        "(井中的水面一片透明，跟瀏覽器一樣）",
        "怎麼又是一片空白，到底躲在哪裏！讓我把你揪出來讓女神給你個痛快！",
        "通往 lv3 : 找出潛藏的 token"
      ],
      typeSpeed: 60,
      smartBackspace: false,
      showCursor: false,
    }
    var typed = new Typed(".dialogue__text", lv2);
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