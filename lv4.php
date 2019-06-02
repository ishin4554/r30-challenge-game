
<!DOCTYPE html>
<html>
  <head>
    <title>lv4: 替身攻擊</title>
    <meta charset="utf-8" />
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/lv4.css" />

  </head>
  <body>
    <?php
      $token = $_GET['token'];
      if($token !== 'commentfaker'){
        echo "<pre>
             > 腦子裡又浮出 m3nT0r 的聲音
            「請使用正確的正確的 token 呦，不然沒辦法到異世界 <3 」
            </pre>";
      } else {
        echo "<h1>lv4 <span>{csspersona}</span><span class='cover'>{tRaNspar3nT}</span></h1>";
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
        "(biu 輕輕的一聲 8bit 雷射槍音效再度從耳邊閃過)",
        "( 水底一陣翻攪，comment 浮出來一陣掙扎)",
        "// {tRaNspar3nT} 好不容易，我好不容易才找到這個地方！",
        "( comment 用 comment 怒吼著) ",
        "明明是 html comment 為什麼要用 javascript comment  說話？",
        "// {tRaNspar3nT} 怎......怎樣，少說廢話，區區單身魔法師，看我的替身攻擊。",
        "誰...誰單身了！可惡，名字都寫在臉上了，看我還不幹死你！",
        "前往 lv5: 請輸入 {tRaNspar3nT} 的名字"
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