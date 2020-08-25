<?php if(isset($_GET['token']) && $_GET['token'] !== "5371") { 
    $token = '5371';
    $input = $_GET['token'];
    for($i=0; $i<4; $i++) {
      if ($token[$i] === $input[$i]) {
        usleep(1000 * 1000);
      }
    }
    die("回來了？");
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
          echo "<div class='nav__help'>[大賢者] response 的時間好像越來越慢？</div>";
        }
      }
      ?>
    </nav>
    <?php if(isset($_GET['token']) && $_GET['token'] === "5371") { ?> 
      <div class='main'>
        <!-- secret logic
          function isTokenValid($token) {
            $h = date('H');
            $m = date('i'); 
            $a = $h * $m + 42;
            $count = 0;
            for($i = 0; $i < 8; $i++) {
              $count += ord($token[$i]) - 65;
            }
            if ($count <= 100) {
              return false;
            }
            return $a % $count === 0;
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