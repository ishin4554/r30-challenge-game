
<!DOCTYPE html>
<html>
  <head>
    <title>lv5: 傳送</title>
    <meta charset="utf-8" />
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <script>
      window.location = '/lv6.php?token=fail';
    </script>
    <?php
      $token = $_GET['token'];
      if($token !== 'csspersona'){
        echo "<pre>
             > 腦子裡又浮出 m3nT0r 的聲音
            「請使用正確的正確的 token 呦，不然沒辦法到異世界 <3 」
            </pre>";
      } else {
        echo "<h1>lv5 鎮</h1>";
        echo "<div class='dialogue'>";
        echo "<div class='dialogue__text'>{redirectnew}</div>";
        echo "</div>";
        echo "</div>";
      }
    ?>
  </body>
</html>