<html>
  <head>
    <title> r3:0 lv4 </title>
    <meta charset='utf-8' />
    <link rel='stylesheet' href='css/main.css' />
    <link rel='stylesheet' href='css/lv4.css' />
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif+TC|Overpass+Mono&display=swap" rel="stylesheet">
  </head>
  <body>
    <nav class='nav'>
      <div> r3:0 異世界網站挑戰 </div>
      <div> 關卡: 4 </div>
      <?php
      if(isset($_GET['hint'])){
        if($_GET['hint']==='help'){
          echo "<div class='nav__help'>[大賢者] 可以開 html 看看</div>";
        }
      }
      ?>
    </nav>
    <?php if(isset($_GET['token']) && $_GET['token']==='commentfaker') { ?> 
      <div class='main'>
        <?php include_once('template/board.html') ?>
        <?php include_once('template/controller.html') ?>
      </div>
      <script src='js/main.js'></script>
      <script src='js/lv4.js'></script>
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
