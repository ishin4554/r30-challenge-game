<html>
  <head>
    <title> r3:0 lv2 </title>
    <meta charset='utf-8' />
    <link rel='stylesheet' href='css/main.css' />
    <link rel='stylesheet' href='css/lv2.css' />
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif+TC|Overpass+Mono&display=swap" rel="stylesheet">
  </head>
  <body>
    <nav class='nav'>
      <div> r3:0 異世界網站挑戰 </div>
      <div> 關卡: 2 </div>
      <?php
      if(isset($_GET['hint'])){
        if($_GET['hint']==='help'){
          echo "<div class='nav__help'>[大賢者] 可以開 CSS 看看</div>";
        }
      }
      ?>
    </nav>
    <div class='hidden'> {divsurprise} </div>
    <?php if(isset($_GET['token']) && $_GET['token']==='bad18') {?> 
      <div class='main'>
        <?php include_once('template/board.html') ?>
        <?php include_once('template/controller.html') ?>
      </div>
      <script src='js/main.js'></script>
      <script src='js/lv2.js'></script>
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
