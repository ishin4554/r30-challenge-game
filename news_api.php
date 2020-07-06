<?php
    if(isset($_GET['id']) && $_GET['id'] === "888888") {
        echo "能看到這則留言的你，想必就是天選之人吧！ {fakeituntilyoumakeit} 拯救這個世界吧！";
    } else {
        echo "沒有權限";
    }
?>