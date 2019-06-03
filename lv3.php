<html>
  <head>
    <title> r3:0 lv3 </title>
    <meta charset='utf-8' />
    <link rel='stylesheet' href='css/main.css' />
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif+TC|Overpass+Mono&display=swap" rel="stylesheet">
  </head>
  <body>
    <nav class='nav'>
      <div> r3:0 異世界網站挑戰 </div>
      <div> 關卡: 3 </div>
      <?php
      if(isset($_GET['hint'])){
        if($_GET['hint']==='help'){
          echo "<div>[大賢者] 可以開 CSS 看看</div>";
        }
      }
      ?>
    </nav>
    <?php
      if(isset($_GET['token']) && $_GET['token']==='divsurprise') {
        ?> 
        <?php
          echo "<div class='board'>"; 
          echo "<div class='board__content'></div>";
          echo "</div>";
        ?>
        <!-- {commentfaker} -->
        <div class='controller'>
          <div class='controller__jump'>jump</div>
          <div class='controller__stop'>stop</div>
          <div class='controller__continue'>continure</div>
          <div class='controller__replay'>replay</div>
        </div>
        <script src='js/lv3.js'></script>
        <script src='js/main.js'></script>
        <?php
      } else {
        echo "<div class='board'>"; 
        echo "<div class='board__content'>輸入錯誤 token 傳送失敗</div>";
        echo "</div>";
        ?>
        <div class='controller'>
          <a href='./index.html'>從頭再來</a>
          <a onclick='history.back()'>回上一關</a>
        </div>
        <?php
        }
        ?>
  </body>
</html>
