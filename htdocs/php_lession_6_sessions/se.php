<?php 


session_start();


$_SESSION['auth'] = true;
$_SESSION['user'] = false;
var_dump($_SESSION);
?>


<a href="se2.php">session2</a>