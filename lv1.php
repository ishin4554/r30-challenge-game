
<!DOCTYPE html>
<html>
  <head>
    <title>lv1: 聽不懂的小鎮</title>
    <meta charset="utf-8" />
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <?php
      $token = $_GET['token'];
      if($token !== 'r30:start'){
        echo "<pre>
             > 腦子裡又浮出 m3nT0r 的聲音
            「請使用正確的正確的 token 呦，不然沒辦法到異世界 <3 」
            </pre>";
      } else {
        echo "<h1>lv1 村</h1>";
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
    let lv1 = {
      strings: [
        "又是一陣白光",
        "再睜開眼，是一個混亂的市集，衝過我旁邊的村民講著我聽不懂的語言",
        "<b>村民: 100101001001100001110</b> ",
        "這是在 ...... 求救嗎？ （一個村民死死地抓著我說著一句話）",
        "完全聽不懂啊，難道他在告訴我怪物的名字？",
        "<b>村民: 100101001001100001110</b> ",
        "但這個語言，我似乎見過，我要趕快把怪物的名字用十八進位的語言傳給女神才行",
        "通往 lv2: 解開 100101001001100001110 之謎"
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