<html>
  <head>
    <title> r3:0 lv11 </title>
    <meta charset='utf-8' />
    <link rel='stylesheet' href='css/main.css' />
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif+TC|Overpass+Mono&display=swap" rel="stylesheet">
  </head>
  <script>
    let siteUrl = "http://<?php echo $_SERVER['SERVER_NAME']; ?>";
  </script>
  <body>
    <nav class='nav'>
      <div> r3:0 異世界網站挑戰 </div>
      <div> 關卡: 11 </div>
      <?php
      if(isset($_GET['hint'])){
        if($_GET['hint']==='help'){
          echo "<div class='nav__help'>[大賢者] 不同世界的 CORS 在阻止我 .....</div>";
        }
      }
      ?>
    </nav>
    <?php if(isset($_GET['token']) && $_GET['token'] === "sosdan") { ?> 
      <div class='main'>
        <?php include_once('template/board.html') ?>
        <?php include_once('template/controller.html') ?>
      </div>
      <script src='js/main.js'></script>
      <script src='js/lv11.js'></script>
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
