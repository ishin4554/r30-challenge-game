<?php 
  date_default_timezone_set("Asia/Taipei");
?>
<html>
  <head>
    <title> r3:0 lv15 </title>
    <meta charset='utf-8' />
    <link rel='stylesheet' href='css/main.css' />
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif+TC|Overpass+Mono&display=swap" rel="stylesheet">
  </head>
  <body>
    <nav class='nav'>
      <div> r3:0 異世界網站挑戰 </div>
      <div> 關卡: 15 </div>
      <?php
      if(isset($_GET['hint'])){
        if($_GET['hint']==='help'){
          echo "<div class='nav__help'>[大賢者] 時間跟密碼混在一起了</div>";
        }
      }
      ?>
    </nav>
    <?php if(isset($_GET['token'])) { 
      $input = $_GET['token'];
      $h = date('H');
      $m = date('i');
      if($h*$m + $token === 3030) { 
    ?> 
      <div class='main'>
        <?php include_once('template/board.html') ?>
        <?php include_once('template/controller.html') ?>
      </div>
      <script src='js/main.js'></script>
      <script src='js/lv15.js'></script>
    <?php } else { ?>
      <div class='main'>
        <?php include_once('template/board.html') ?>
        <?php include_once('template/controller.html') ?>
      </div>
      <script src='js/main.js'></script>
      <script src='js/failmsg.js'></script>        
    <?php } ?>
    <?php } ?>
  </body>
</html>