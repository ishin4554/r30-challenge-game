
<!DOCTYPE html>
<html>
  <head>
    <title>lv3: 畫面還是一片透明</title>
    <meta charset="utf-8" />
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <?php
      $token = $_GET['token'];
      if($token !== 'divsurprise'){
        echo "<pre>
             > 腦子裡又浮出 m3nT0r 的聲音
            「請使用正確的正確的 token 呦，不然沒辦法到異世界 <3 」
            </pre>";
      } else {
        echo "<h1>lv3 鎮</h1>";
        echo "<!-- {commentfaker} -->";
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
        "(biu 輕輕的一聲 8bit 雷射槍音效從耳邊閃過) ",
        "(水中一個 div 開始掙扎死掉）",
        "呼，這下終於可以休息了",
        "(但昏迷的村民沒有醒轉的跡象) ",
        "怎麼回事，難道剛剛那個不是真正的罪魁禍首嗎？",
        "(我又回去看井水的水面，還是一片透明)",
        "難道還有一隻？",
        "前往 lv4: 請找出潛藏的另外一個 token"
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