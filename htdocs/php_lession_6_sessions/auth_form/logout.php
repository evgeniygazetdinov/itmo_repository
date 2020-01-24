<?php

    function log_out(){
        session_start();
        unset($_SESSION['login']);
        unset($_SESSION['auth']);
        $_SESSION = [];
        session_destroy();
        header('page.php')
    }

log_out();
?>
