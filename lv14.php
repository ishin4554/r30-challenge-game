<?php if(isset($_GET['input'])) { 
    $token = '5371';
    $input = $_GET['input'];
    for($i=0; $i<4; $i++) {
      if ($token[$i] !== $input[$i]) {
        die("wrong token");
      } else {
        usleep(1000 * 1000);
      }
    }
    echo "correct";
  }
?>
<html>
  <head>
    <title> r3:0 lv14 </title>
    <meta charset='utf-8' />
    <link rel='stylesheet' href='css/main.css' />
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif+TC|Overpass+Mono&display=swap" rel="stylesheet">
  </head>
  <body>
    <nav class='nav'>
      <div> r3:0 異世界網站挑戰 </div>
      <div> 關卡: 14 </div>
      <?php
      if(isset($_GET['hint'])){
        if($_GET['hint']==='help'){
          echo "<div class='nav__help'>[大賢者] response 的時間好像越來越快？</div>";
        }
      }
      ?>
    </nav>
    <?php if(isset($_GET['token']) && $_GET['token'] === "1234") { ?> 
      <div class='main'>
        <!-- 
          function isTimeCheck(h, m, token) {
            return r${h * m + token} === '3030';
          }
         -->
        <div id="time"></div>
        <?php include_once('template/board.html') ?>
        <?php include_once('template/controller.html') ?>
      </div>
      <script src='js/main.js'></script>
      <script src='js/lv14.js'></script>
    <?php } else { ?>
      <div class='main'>
        <?php include_once('template/board.html') ?>
        <?php include_once('template/controller.html') ?>
      </div>
      <script src='js/main.js'></script>
      <script src='js/failmsg.js'></script>        
    <?php } ?>
  </body>
</html>