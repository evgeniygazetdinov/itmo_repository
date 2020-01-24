<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Форма</title>
    <style>
        form div {
            margin-bottom: 20px;
        }
    </style>
</head>
<?php 
setcookie('lang[1]','python');
setcookie('lang[2]','java');

$color = $_COOKIE['color'];
var_dump($_COOKIE);?>
<body style="background-color:<?php echo $color?>">
<a href="s.php">главная</a>
<a href="f.php">цвет</a>
<a href="form_handler.php">форма</a>
</body>