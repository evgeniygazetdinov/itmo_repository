<?php
// подключение php файлов в текущий файл:
// если файл не найдет, подключение приведет
// к ошибке и выполнение скрипта прекратится
//require "имя файла";
//require_once "имя файла";
// если файл не найден, скрипт продолжит
// выполнение
//include "имя файла";
//include_once "имя файла";
require_once "data.php";
$books = getBooks();
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Main Page</title>
</head>
<body>
    <? include_once 'header.php';?>

    <? foreach ($books as $value): ?>
    <div>
        <h3>Книга <? echo $value['title']?> </h3>
        <h6>Автор: <? echo $value['author']?></h6>
        <img width="400" height="200" src="img/<? echo $value['img']?>">
        <p>Стоимость <? echo $value['price']?></p>
        <a href="book.php?id=<? echo $value['id']?>">Подробнее...</a>
    </div>
<? endforeach;?>
</body>
</html>