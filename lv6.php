
<!DOCTYPE html>
<html>
  <head>
    <title>lv5: 傳送</title>
    <meta charset="utf-8" />
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <?php
      $token = $_GET['token'];
      if($token === 'fail'){
        echo "<h1>GAME OVER</h1>";
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
          let lv6 = {
            strings: [
              "？？？？？ 輸了？",
              "我記得，剛剛女神開了一個地圖炮，怎麼突然就",
              "可惡，難道剛剛 css 替身開了掛了？",
              "讓我找出你的把戲！",
              "前往 lv6: 請想辦法回到 lv5 找出 lv6 正確的 token",
            ],
            typeSpeed: 60,
            smartBackspace: false,
            showCursor: false,
          }
          var typed = new Typed(".dialogue__text", lv6);
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
      <?php
      } else if ($token === 'redirectnew') {
        echo "<h1>lv6 鎮</h1>";
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
            let lv2 = {
              strings: [],
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
        <?php
      }
    ?>
  </body>
</html>